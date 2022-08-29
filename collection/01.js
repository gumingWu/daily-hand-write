Array.prototype.myGroup = function (callback, thisArg=null) {
  if(typeof callback !== 'function') {
    throw new TypeError('not a function')
  }

  const arr = this
  const length = this.length
  const grouper = Object.create(null)

  for(let i=0; i<length; i++) {
    const key = callback.call(thisArg, arr[i], i, arr)
    if(!grouper[key]) {
      grouper[key] = [arr[i]]
    } else {
      grouper[key].push(arr[i])
    }
  }

  return grouper
}

const array = [1, 2, 3, 4, 5]
const res = array.myGroup((num, index, array) => {
  return num % 3 === 0 ? 'aa': 'bb'
})
console.log(res);