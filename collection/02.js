/** 手动添加依赖
 * 
  // 需要响应式处理的对象
  const obj = {
    a: 1,
    b: 2
  }

  // 建立依赖对象
  const depsMap = new Map()
  const aDeps = new Set()
  depsMap.set('a', aDeps)
  const bDeps = new Set()
  depsMap.set('b', bDeps)
  const reactiveMap = new WeakMap()
  reactiveMap.set(obj, depsMap)

  // 副作用函数
  const effectA = () => {
    console.log(obj.a);
  }

  // 以上步骤会自动执行以下操作进行副作用收集
  const tmpDepsMap = reactiveMap.get(obj)
  const tmpADeps = tmpDepsMap.get('a')
  tmpADeps.add(effectA)

 */

/**
 * 
// 创建对象
const data = {
  a: 1,
  b: 2
}

let activeEffect  // 表示当前的激活副作用
function effect(fn) { // 执行这个方法，会马上执行副作用，并且将当前副作用赋值给激活副作用
  activeEffect = fn
  fn()
}

const reactiveMap = new WeakMap()
const obj = new Proxy(data, {
  get(targetObj, key) {
    let depsMap = reactiveMap.get(targetObj)

    if(!depsMap) {
      reactiveMap.set(targetObj, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if(!deps) {
      depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)  // 这里添加副作用

    return targetObj[key]
  },
  set(targetObj, key, newVal) {
    targetObj[key] = newVal

    const depsMap = reactiveMap.get(targetObj)
    if(!depsMap) return

    const effects = depsMap.get(key)
    effects && effects.forEach(fn => fn())
  }
})

effect(() => {
  console.log('log a', obj.a);
})  // log a 1
obj.a = 11  // log a 11

 */

const data = {
  a: 1,
  b: 2
}

let activeEffect
function effect(fn) {
  const effectFn = () => {
    cleanup(effectFn)  // 在下次执行执行这个effect时，就把这个effect函数从上次添加到的依赖集合中删除
    activeEffect = effectFn
    fn()
  }

  effectFn.deps = []  // 记录这个effect函数被放到哪些deps集合下
  effectFn()
}
function cleanup(effectFn) {
  for(let i=0; i<effectFn.deps.length; i++) {
    const deps = effectFn.deps[i]
    deps.delete(effectFn)
  }
  effectFn.deps.length = 0
}

const reactiveMap = new WeakMap()
const obj = new Proxy(data, {
  get(targetObj, key) {
    let depsMap = reactiveMap.get(targetObj)

    if(!depsMap) {
      reactiveMap.set(targetObj, (depsMap = new Map()))
    }

    let deps = depsMap.get(key)
    if(!deps) {
      depsMap.set(key, (deps = new Set()))
    }

    deps.add(activeEffect)
    activeEffect.deps.push(deps)

    return targetObj[key]
  },
  set(targetObj, key, newVal) {
    targetObj[key] = newVal

    const depsMap = reactiveMap.get(targetObj)
    if(!depsMap) return

    const effects = depsMap.get(key)
    // effects && effects.forEach(fn => fn()) // 如果这里不修改，在触发set的时候会导致无限循环执行set
    // set 的时候会执行所有的当前 key 的 deps 集合里的 effect 函数
    // 而我们执行 effect 函数之前会把它从之前的 deps 集合中清掉
    // 执行的时候又被添加到了 deps 集合
    // 这样 delete 又 add，delete 又 add，所以就无限循环了
    // 解决方案，创建第二个Set，只用于遍历
    const effectsToRun = new Set(effects)
    effectsToRun.forEach(effectFn => effectFn())
  }
})

effect(() => {
  console.log(obj.a ? obj.b : 'nothing');
})

obj.a = null
obj.b = 22