const arr = ['1.5', '1.6','1.45.1',  '3.3.3.3.3', '6']

function versionSort(arr) {
  arr.sort((a, b) => {
    const arr1 = a.split('.')
    const arr2 = b.split('.')

    for(let i=0; i<arr1.length || i<arr2.length; i++) {
      const s1 = arr1[i]
      const s2 = arr2[i]
      if (s1 === undefined || s2 === undefined) {
        return arr1.length - arr2.length;
      }
      if (s1 === s2) continue;
      return s1 - s2;
    }
  })
}

versionSort(arr)
console.log(arr);