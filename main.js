// console.log('hello world');
// console.error('This is an error');
// console.warn('This is an warn');
// let name = "rockysaini";
// name="shiva";
// console.log(name);
// const age=30;
// // age=70;
// console.log(age);


//datatypes
// string number boolean undefined and symbol
// const name ='john';
// const age = 30;
// const rating = 4.5;
// const iscool = true;
// const x= null;
// const y = undefined;
// console.log(typeof y)

// const name = 'rocky';
// const age = 30;

// // Concatenation
// // console.log('My name is '+name+' and i am '+age);
// //Temaplate string
// // console.log('my name is ${name} and i am ${age}')
// const hello = 'my name is ${name} and i am ${age}';
// console.log(hello);

// const s= 'hello world!';
//  const s= 'hello,rocky,saini,its,code';

// // console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(','));

//Arrays- that holds multiple values

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);
// const fruits = ['apples','oranges','pears'];
// fruits[3]='rocky';
// fruits.push('mango');
// fruits.unshift('strwaberry');
// fruits.pop();
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('oranges'));
// console.log(fruits);

// const person = {
//     firstName:'jhon',
//     lastName:'doe',
//     age : 30,
//     hobbies :['music','movies','sports'],
//     address :{
//         street: '50 main st',
//         city:'Boston',
//         state:'MA'
//     }
// }
// console.log(person);
// console.log(person.firstName,person.lastName);
// console.log(person.hobbies[1])
// console.log(person.address.city)
// const {firstName,lastName,address:{city}}=person;
// console.log(firstName,lastName,city)
// person.email = 'jhon@gmail.com';
// console.log(person);

// for(let i=0;i<todos.length;i++){
//     console.log(todos[i].text);
// }
// for(let todo of todos){
//     console.log(todo.text)
// }
// // console.log(todos);
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

//for loop
// for(let i=0;i<10;i++){
//     console.log('for loop number:'+i);
// }

//while loop
// let i =0;
// while(i<10){
//     console.log('while loop number:'+i);
//     i++;
// }



//forEach, map, filter

//forEach
// todos.forEach(function(todo){
//     console.log(todo.text);
// })

//map

// const todoText = todos.map(function(todo){
//     return todo.text;
// })
// console.log(todoText);

//filter
// const todocompleted = todos.filter(function(todo){
//     return todo.iscompleted === true;
// }).map(function(todo){
//     return(todo.text);
// })
// console.log(todocompleted);


//if conditions.
// const x= 6;

// const y=11;
// if(x>5 && y>10){
//     console.log('x is more than 5 or y is more than 10');
// }

//ternary operator
// const x=9;

// const color = x>10 ? 'red':'blue';
// const color ='green';

// //switch  

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//         default:
//             console.log('color is not red or blue');
// }

//functions
// function addnums(nums1,nums2){
//     return nums1+nums2;
// }
// console.log(addnums(5,5));

//function with arrow functions

// const addnums = (num1,num2)=>
// //  num1+num2;
// {
//     // return num1 +num2;
//     // console.log(num1+num2);
// }
// // console.log(addnums(5,5));
// console.log(addnums(5,5));

//Now we moving on object oriented programming

//COnstructor function
function Person (firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob=new Date(dob);
}
//Instantiate object
const person1 = new Person('rocky','saini','10-15-2001');
const person2 = new Person('Shiva','saini','3-6-1970');
console.log(person1.dob);