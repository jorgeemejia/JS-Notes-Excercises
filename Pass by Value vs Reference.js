//primitive types are passed by value
var a = 5;
var b = 10;

b++;

//non-primitive types are passed by reference
let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy'

console.log(obj1)
console.log(obj2)

////
var c = [1,2,3,4,5];
var d = c;
d.push(6)
console.log(c)
////
let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({},obj);
let clone2 = {...obj}

obj.c = 5;
console.log(clone)
console.log(clone2)
////Shallow cloning, only cloning the first layer
let obj = {
a: 'a', 
b: 'b', 
c: {deep: 'try and copy me'}};
let clone = Object.assign({},obj);
let clone2 = {...obj}

obj.c.deep = 'hahaha';
console.log(clone)
console.log(clone2)
///
let obj = {
    a: 'a', 
    b: 'b', 
    c: {deep: 'try and copy me'}};
let clone = Object.assign({},obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))
    
obj.c.deep = 'hahaha';
console.log(clone)
console.log(clone2)