function checkValid(s) {
    const arr = []
    arr.push(s[0])
    for (let i = 1; i < s.length; i++) {

        if (arr.length == 0) {
            arr.push(s[i])
        } else {
            if (s[i] == "{" && arr[arr.length - 1] == "}" || s[i] == "}" && arr[arr.length - 1] == "{") {
                arr.pop()
            } else if (s[i] == "[" && arr[arr.length - 1] == "]" || s[i] == "]" && arr[arr.length - 1] == "[") {
                arr.pop()
            } else if (s[i] == "(" && arr[arr.length - 1] == ")" || s[i] == ")" && arr[arr.length - 1] == "(") { arr.pop() } else {
                arr.push(s[i])
            }
        }

    }
    return arr.length == 0
}

const s = "([]{(})"

console.log(checkValid(s))