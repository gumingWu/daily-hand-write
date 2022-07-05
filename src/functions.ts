import fs from 'fs-extra'
import { join, resolve } from 'path'

const DIR_PACKAGE = resolve(__dirname, '..')

export let Issues_Total = 0

export async function resolveIssuesList(issuesList) {
  Issues_Total = issuesList.length

  await fs.writeJson(join(DIR_PACKAGE, 'index.json'), issuesList, { spaces: 2 })
}
