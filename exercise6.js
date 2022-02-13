//Evaluate these:
//#1
[2] === [2] 
{} === {} 
//Sol'n
//Both above are non-primitive types so they are unique and not treated as equals


//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
//Ans: 5
const object2 = object1; 
//Ans: 5
const object3 = object2; 
//Ans: 5
const object4 = { a: 5}; 
//Ans: 5
object1.a = 4;
//Ans: 5


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

