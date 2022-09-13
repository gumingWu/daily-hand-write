const root = [
  {
      id: 1,
      name: '1x',
      children: [
          {
              id: 11, name: '11x', children: [{ id: 111, name: '111x' }]
          },
          { id: 12, name: '12x' },
      ]
  },
  {
      id: 2,
      name: '1x',
      children: [
          {
              id: 21, name: '21x', children: [{ id: 211, name: '21x' }]
          },
          { id: 12, name: '12x' },
      ]
  },
  {id: 3,name: '3x'}
]
  //输出以下格式，
  //{id:1,name:'1x',children:[11,21]}
  //{id:11,name:'1x',parent:[1],children:[111]}
  //{id:12,name:'12x',parent:[1]}
  //{id:3,name:'3x'}

function dfs(arr, res, parentId) {
  arr.forEach(item => {
    const { id, name, children=[] } = item
    const obj = { id, name }
    if(children.length !== 0) {
      obj.children = children.map(child => child.id)
      dfs(children, res, id)
    }
    if(parentId) 
      obj.parent = [parentId]

    res.push(obj)
  })

  return res
}

console.log(dfs(root, []));