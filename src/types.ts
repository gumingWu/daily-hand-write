export interface IIssuesResponseItem {
  url: string | null
  repository_url: string | null
  labels_url: string | null
  comments_url: string | null
  events_url: string | null
  html_url: string | null
  id: number
  node_id: string | null
  number: number
  title: string | null
  user: IIssuesResponseUser
}

// issues的发表人
export interface IIssuesResponseUser {
  login: string | null
  id: number
  node_id: string | null
  avatar_url: string | null
  gravatar_id: string | null
  url: string | null
  html_url: string | null
  followers_url: string | null
  following_url: string | null
  gists_url: string | null
  reactions: IIssuesResponseReactions
  timeline_url: string | null
  performed_via_github_app: string | null
  state_reason: string | null
}

// issues的反应
export interface IIssuesResponseReactions {
  url: string | null
  total_count: number
  '+1': number
  '-1': number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}
