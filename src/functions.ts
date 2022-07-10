import fs from 'fs-extra'
import { join, resolve } from 'path'
import MagicString from 'magic-string'
import { $fetch } from 'ohmyfetch'
import { owner, repo, ISSUES_TOKEN } from '.'

const DIR_PACKAGE = resolve(__dirname, '..')
const DIR_CREATED_MD_PACKAGE = resolve(__dirname, '../autoPackage')
const isPrd = process.env.NODE_ENV === 'prd'

if(isPrd) {
  console.log(process.env.SECRET !== '' ? '我有密钥啊hhh' : '没有555');
}

export async function resolveIssuesList(issuesList) {
  // 创建json文件，用于构造菜单
  await fs.writeJson(join(DIR_PACKAGE, 'index.json'), issuesList, { spaces: 2 })

  // 遍历issues，创建md文件
  await fs.remove(DIR_CREATED_MD_PACKAGE)
  await fs.ensureDir(DIR_CREATED_MD_PACKAGE)
  await Promise.all(issuesList.map(issuesItem => createIssuesMd(issuesItem)))
}

export async function createIssuesMd(issuesItem) {
  const { title, created_at } = issuesItem

  // 裁剪创建时间年月为目录
  const yearMon = created_at.slice(0, 7)

  const mdDirPath = join(DIR_CREATED_MD_PACKAGE, yearMon)
  await fs.ensureDir(mdDirPath)

  const showTitle = title.replace(/:|：/, '.')
  const mdPath = join(mdDirPath, `${showTitle.trim()}.md`)
  await fs.createFile(mdPath)

  const mdContent = await prepareMdContent(issuesItem)
  
  await fs.writeFile(mdPath, `${mdContent.trim()}\n`, 'utf-8')
}

export async function prepareMdContent(issuesItem) {
  const { title, created_at, updated_at, number, user, body } = issuesItem

  const str = new MagicString('')

  const strBody = body || 'no body~'
  strBody.replace(/\r\n/g, '\n')

  // 测试生产模式
  const testPrdTitle = isPrd ? title + '-prd' : title

  const comments = await getIssueComment(number)

  str.append(`# ${testPrdTitle}\n\n`).append(`<IssueInfo created-at="${created_at}" updated-at="${updated_at}" creator="${user.login}"></IssueInfo>\n\n`).append(`${strBody}\n\n`).append(`${comments}\n\n`)

  return str.toString() || ''
}

// TODO 针对```js的情况，貌似不能识别```JavaScript，这里要做转换处理
// TODO 有的人的评论，自带##标题，跟我自己的标题有重合，这里也需要处理
// TODO 在生成的时候有卡死的情况，也要排查
export async function getIssueComment(issuesNum: number) {
  const res = await $fetch(`https://api.github.com/repos/${owner}/${repo}/issues/${issuesNum}/comments`, {
    headers: {
      Authorization: `token ${ISSUES_TOKEN}`
    }
  })
  
  return res.map(comment => {
    const { user, created_at, body } = comment
    const { login, avatar_url, html_url } = user

    const str = new MagicString('')

    const strBody = body || 'no body~'
    strBody.replace(/\r\n/g, '\n')

    str.append(`## ${login}\n\n`).append(`**Created at ${created_at}**\n\n`).append(`${body}\n\n`)

    return str.toString() || ''
  }).join('')
}
