import fs from 'fs-extra'
import { join, resolve } from 'path'

const DIR_PACKAGE = resolve(__dirname, '..')
const DIR_CREATED_MD_PACKAGE = resolve(__dirname, '../autoPackage')

export let Issues_Total = 0
export let Issues_Content = null

export async function resolveIssuesList(issuesList) {
  Issues_Total = issuesList.length
  Issues_Content = issuesList

  // 创建json文件，方便看数据
  // await fs.writeJson(join(DIR_PACKAGE, 'index.json'), issuesList, { spaces: 2 })

  // 遍历issues，创建md文件
  await fs.removeSync(DIR_CREATED_MD_PACKAGE)
  await fs.ensureDirSync(DIR_CREATED_MD_PACKAGE)
  await Promise.all(issuesList.map(issuesItem => createIssuesMd(issuesItem)))
}

export async function createIssuesMd(issuesItem) {
  const { title, created_at, body } = issuesItem

  // 裁剪创建时间年月为目录
  const yearMon = created_at.slice(0, 7)
  const mdDirPath = join(DIR_CREATED_MD_PACKAGE, yearMon)
  await fs.ensureDirSync(mdDirPath)

  const mdPath = join(mdDirPath, `${title.replace(/:|：/, '.')}.md`)
  await fs.createFileSync(mdPath)
}

export function getMainSidebar() {
  return [
    {
      text: "Guide",
      items: [{ text: "介绍", link: "/guide/" }],
    },
  ]
}
