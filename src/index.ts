import { $fetch } from "ohmyfetch";
import { resolveIssuesList } from "./functions";

const ISSUES_TOKEN = 'token'
const owner = 'nice-people-frontend-community'
const repo = 'nice-handwriting-practice'

async function getIssuesListByFetch() {
  const res = await $fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    headers: {
      Authorization: `token ${ISSUES_TOKEN}`
    }
  })
  resolveIssuesList(res)
}
getIssuesListByFetch()
