// let + const

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90)
{
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

//use 'let' for variables that might change and 'const' for constant variables

////////////////////////////////////////////////////////////////////////////////

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

//you can't reassign the variable, but you can reassign the properties

////////////////////////////////////////////////////////////////////////////////

//Destructuring


const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const {player, experience} = obj;
let {wizardLevel} = obj;

////////////////////////////////////////////////////////////////////////////////

//Object properties

// const name = 'john snow';

// const obj = {
//     [name]: 'hello',
//     ['ray' + 'smith']: 'hihi'
// }

// const a = "Simon";
// const b = true;
// const c = {};

// const obj = {a, b, c}


////////////////////////////////////////////////////////////////////////////////

//Template Strings

// const greeting = "Hello" + name + "you seem to be doing " + greeting + "!"

// const name = "Sally";
// const age = 34;


// const greetingBest = `Hello ${name} you seem to be ${age-10}`
///////////////////////////////////////////////////////////////////

//default arguments

// function greet(name='', age=30)
// {
//     return `Hello ${name} you seem to be ${age-10}`;
// }


//Symbol (completely unique type, meant for object properties)

// var sym1 = Symbol();
// var sym2 = Symbol('foo');
// var sym3 = Symbol('foo');


//Arrow functions


function add(a, b){
    return a + b;
}

const add = (a, b) => a + b;
