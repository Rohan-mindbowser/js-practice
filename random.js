// const arr = [1, 2, 3, 4, 5, 5]
// const arr2 = [1, 2, 3, 4]


// function isUnique(arr) {
//     const set = new Set()

//     for (let i = 0; i < arr.length; i++) {
//         set.add(arr[i])
//     }

//     return set.size === arr.length
// }

// console.log(isUnique(arr2))

const arr = [1, 2, 5, 6, 7]
const t = 9

function find(arr, t) {
    const map = new Map()

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i)
    }

    let res;

    map.forEach((element, key) => {
        if (map.has(t - key)) {
            res = [element, map.get(t - key)]
        }
    });
    return res.sort()
}

console.log(find(arr, t))