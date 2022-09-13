const person = {
    name: 'san'
}

//cach ko phai copy thang person sang secondPerson ma se
//la con tro chi den cung 1 vung nho person, neu person thay doi
//thi secondPerson cung doi theo
const sencondPerson = person
person.name = 'San2'
console.log(sencondPerson)//No se hien thi San2

//Cach copy dung(co ban la tao ra 1 obj moi)
person.name = 'San3'
const thirdPerson = {
    ...person
}
person.name = 'San2'
console.log(thirdPerson)//No se hien thi San3
