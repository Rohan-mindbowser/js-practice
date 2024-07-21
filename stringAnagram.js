const str1 = 'add'
const str2 = 'dad'

//Approach 1

// console.log(str1.split("").sort().join("") === str2.split("").sort().join(""))

//Approach 2

if (str1.length !== str2.length) {
    console.log("Not anagram")
} else {
    const set1 = new Set()
    const set2 = new Set()
    for (let i = 0; i < str1.length; i++) {
        set1.add(str1[i])
        set2.add(str2[i])
    }

    console.log(set1.size === set2.size)
}