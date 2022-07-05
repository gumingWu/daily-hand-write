import { $fetch } from "ohmyfetch";
import { resolveIssuesList } from "./functions";

let ISSUES_TOKEN = ''
const owner = 'nice-people-frontend-community'
const repo = 'nice-handwriting-practice'

if(process.env.NODE_ENV === 'dev') {
  const { secret } = require('../env.local.js')
  ISSUES_TOKEN = secret
}
if(process.env.NODE_ENV === 'prd') {
  ISSUES_TOKEN = ''
}

async function getIssuesListByFetch() {
  const res = await $fetch(`https://api.github.com/repos/${owner}/${repo}/issues?direction=asc&per_page=100`, {
    headers: {
      Authorization: `token ${ISSUES_TOKEN}`
    }
  })
  resolveIssuesList(res)
}
getIssuesListByFetch()
