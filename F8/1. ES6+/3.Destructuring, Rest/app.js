//*Distructuring
var arr = ['Javascript', 'PHP', 'Ruby'];
//c1
var a = arr[0];
var b = arr[1];
var c = arr[2];
//c2
var [a, b, c] = arr;
console.log(a, c);

//*Rest: phan con lai
var [a, ...rest] = arr;
console.log(rest);

var course = {
    name: 'Javascript',
    price: 1000,
    image: 'img.jpg',
    child: {
        name: 'ReactJS',
        price: 500
    },

}
var { name, price } = course
console.log(name, price);

var { name, ...rest } = course
console.log(rest);

//Doi ten thuoc tinh
var { name: parentName, child: { name: childName } } = course
console.log(parentName, childName);

//Neu obj khong co thuoc tinh des thi mac dinh no se la default des
var { name, description = 'default des' } = course
console.log(description);


function logger(...params) {
    console.log(params); //no se chuyen cac tham so truyen vao thanh array
}

function logger2(a, ...params) {
    //tham so a o day se duoc coi la phan tu dau tien cua day tham so truyen vao
    console.log(params); //no se chuyen cac tham so truyen vao thanh array
}

console.log(logger(1, 2, 3, 4, 5, 6, 7, 8));
console.log(logger2(1, 2, 3, 4, 5, 6, 7, 8));
//tuong tu voi obj
function logger3({ name, price, ...rest }) {
    console.log(name); //no se chuyen cac tham so truyen vao thanh array
    console.log(price);
    console.log(rest);
}
logger3({
    name: 'Javascript3',
    price: 3000,
    description: 'Description content'
});