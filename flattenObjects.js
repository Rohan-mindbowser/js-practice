const user = {
    name: "rohan",
    address: {
        primary: {
            house: "109",
            street: {
                main: 23,
                cross: ["32", '31']
            }
        }
    }
}


const flattenObj = (obj, parentKey) => {
    let res = {}

    function flat(obj, parentKey) {
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value === 'string') {
                res[`${parentKey}${key}`] = value
            } else {
                flat(value, `${parentKey}${key}_`)
            }
        }
    }
    flat(obj, parentKey)
    return res
}

console.log(flattenObj(user, "user_"))

// output

// {
//     user_name: 'rohan',
//     user_address_primary_house: '109',
//     user_address_primary_street_main: '23',
//     user_address_primary_street_cross: ["32", "31"],
// }