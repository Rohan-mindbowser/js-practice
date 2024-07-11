const memoize = (cb) => {
    const map = new Map()

    return (...args) => {
        const key = String(...args)
        if (map.has(key)) {
            console.log("Cached")
            return map.get(key)
        }
        const res = cb(...args)
        map.set(key, res)
        return res
    }
}

const cube = (num) => num * num * num

const cubeMemoize = memoize(cube)

console.log(cubeMemoize(445566))
console.log(cubeMemoize(445566))
