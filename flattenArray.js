const arr = [1, 2, [3, 4], [5]]

// const flattenArray = (arr)=>{

//     const flatIt = []

//     function flat(arr){
//         for(let i=0;i<arr.length ;i++){
//             if(Array.isArray(arr[i])){
//                 flat(arr[i])
//             }else{
//                 flatIt.push(arr[i])
//             }
//         }
//     }
//     flat(arr)
//     return flatIt
// }

const flatArr = (arr) => {
    return arr.toString().split(",").map(el => Number(el))
}

console.log(flatArr(arr))