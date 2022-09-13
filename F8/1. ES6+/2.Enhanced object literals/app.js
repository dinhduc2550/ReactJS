// /**
//  * 1. Định nghĩa key: value cho object
//  * 2. Định nghĩa method cho object
//  * 3. Định nghĩa key cho object dưới dạng biến
//  */
// var name = 'Javascript'
// var price = 1000
//     //VD1
// var course = {
//     name: name,
//     price: price
// }
// console.log(course);
// //VD2
// var course2 = {
//     name,
//     price,
//     getName() {
//         return name;
//     }
// }
// console.log(course2);
// //VD3
// var fieldName = 'name2'
// var fieldPrice = 'price';

// const course3 = {
//     [fieldName]: 'Javascript',
//     [fieldPrice]: 1000
// }
// console.log(course3);

//*Flat arr (làm phẳng mảng)
// var depthArr = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

// const flatArr = depthArr.reduce(function(flatOuput, depthItem) {
//     return flatOuput.concat(depthItem)
// }, [])
// console.log(flatArr)

//*Bai Tap

const obj1 = [
    ['name', 'Son Dang'],
    ['age', 21],
    ['address', 'Ha Noi']
]
var i = 0

function arrToObj(arr) {
    return obj4 = arr.reduce((acc, cur) => {
        return {
            ...acc,
            [cur[0]]: cur[1]
        }
    }, {})
}

function convert(acc, cur, index) {
    return {...acc, [cur.name]: cur }
}

// const obj4 = obj1.reduce((acc, cur, index) => {
//     return {...acc, ['key' + index]: cur };
// }, {})

// let newObj = obj1.reduce(convert, {});

// Expected results:


// console.log(obj1)
// Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }
// console.log(arrToObj(obj1));
console.log(arrToObj(obj1))