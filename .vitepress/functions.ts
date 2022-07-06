import { join } from 'path'
import IssuesJson from '../index.json'

export function getSideBarMenu() {
  const res = []
  for(const issue of IssuesJson) {
    const { title, created_at } = issue

    const showTitle = title.replace(/:|：/, '.')
    const yearMon = created_at.slice(0, 7)
    
    if(!res.some(item => item.text === yearMon)) {
      res.push({
        text: yearMon,
        items: [{
          text: showTitle,
          link: `/autoPackage/${yearMon}/${showTitle}`
        }]
      })
    } else {
      const currentSubmenu = res.find(item => item.text === yearMon)
      currentSubmenu.items.push({
        text: showTitle,
        link: `/autoPackage/${yearMon}/${showTitle}`
      })
    }
  }
  return res
}
