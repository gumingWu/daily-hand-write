import fs from 'fs-extra'
import { join, resolve } from 'path'
import MagicString from 'magic-string'

const DIR_PACKAGE = resolve(__dirname, '..')
const DIR_CREATED_MD_PACKAGE = resolve(__dirname, '../autoPackage')

export async function resolveIssuesList(issuesList) {
  // 创建json文件，用于构造菜单
  await fs.writeJson(join(DIR_PACKAGE, 'index.json'), issuesList, { spaces: 2 })

  // 遍历issues，创建md文件
  await fs.remove(DIR_CREATED_MD_PACKAGE)
  await fs.ensureDir(DIR_CREATED_MD_PACKAGE)
  await Promise.all(issuesList.map(issuesItem => createIssuesMd(issuesItem)))
}

export async function createIssuesMd(issuesItem) {
  const { title, created_at, body } = issuesItem

  // 裁剪创建时间年月为目录
  const yearMon = created_at.slice(0, 7)

  const mdDirPath = join(DIR_CREATED_MD_PACKAGE, yearMon)
  await fs.ensureDir(mdDirPath)

  const showTitle = title.replace(/:|：/, '.')
  const mdPath = join(mdDirPath, `${showTitle}.md`)
  await fs.createFile(mdPath)

  const mdContent = await prepareMdContent(issuesItem)
  
  await fs.writeFile(mdPath, `${mdContent.trim()}\n`, 'utf-8')
}

export async function prepareMdContent(issuesItem) {
  const { title, created_at, body } = issuesItem

  const str = new MagicString('')

  const strBody = body || 'no body~'
  strBody.replace(/\r\n/g, '\n')

  str.append(`# ${title}\n\n`).append(`${strBody}\n`)

  return str.toString() || ''
}
