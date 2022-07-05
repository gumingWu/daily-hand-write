import fs from 'fs-extra'
import { join, resolve } from 'path'

const DIR_PACKAGE = resolve(__dirname, '..')

export let Issues_Total = 0
export let Issues_Content = null

export async function resolveIssuesList(issuesList) {
  Issues_Total = issuesList.length
  Issues_Content = issuesList

  await fs.writeJson(join(DIR_PACKAGE, 'index.json'), issuesList, { spaces: 2 })
}

export function getMainSidebar() {
  return [
    {
      text: "Guide",
      items: [{ text: "介绍", link: "/guide/" }],
    },
  ]
}
