//Spread: Noi array
var arr1 = ['Javascript', 'PHP', 'Ruby'];

var arr2 = ['ReactJS', 'Dart'];

var arr3 = [...arr2, ...arr1];
console.log(arr3);

var obj1 = {
    name: 'Javasript'
}

var obj2 = {
    price: 1000
}

var obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3);

var defaultConfig = {
    api: 'http://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    other: 'other'
}

var exerciesConfig = {
    ...defaultConfig,
    //api o day se ghi de len thang defaultCofig
    api: 'http://domain-trang-bai-tap'
}
console.log(exerciesConfig);