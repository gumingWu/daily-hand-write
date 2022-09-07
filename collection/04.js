const arr = ['1.5', '1.6','1.45.1',  '3.3.3.3.3', '6']

function versionSort(arr) {
  arr.sort((a, b) => {
    const arr1 = a.split('.')
    const arr2 = b.split('.')

    let i=0
    while(arr1[i] === arr2[i])
      i++
    if(!arr1[i])
      return 1
    if(!arr2[i])
      return -1

    return arr1[i] - arr2[i]
  })
}

versionSort(arr)
console.log(arr);