let a = 8;
let b = 9;
let cond1 = a<b; 
let cond2 = a===b;
//console.log("(6>5) ",!(6<5))


//if stetment
let mode = "dark";
let color;
if(mode = "dark"){
    color = "dark";
};
if (mode === "light"){
    color = "light";
};
//console.log(color)

//if-else stetment

let bg = "light"
let bgColor;
if (bg === "dark"){
    bgColor = "dark"
} 
else{
    bgColor = "light"
}

//find odd or evan numbar

let num = 10;
if (num%2===0){
    numbar = "evan"
}
else{
    numbar = "odd"
}



//console.log(bgColor)

//Tennary oparator 
//condition >?  true output : false output;

let age = 18;
let result = age >= 18 ? "Adult" : "not adult";

// Q2 

numbarInput = prompt("Enter a numbar: ");
mulNumbar = numbarInput * 5;


//nsole.log(mulNumbar);



//For loop

for(let count = 1; count <=10; count++){
    console.log("My name is Rakib")
};


//sum 1 to 10 
let sum = 0;
for(let i = 0; i <=5; i++){
    sum = sum +i;
};
console.log("sum = ",sum);

//While loops

let i = 1;
while (i<=5){
    console.log("Appna collage");
    i++;
}
//Do-while-loops

let i = 20;
do{
    console.log("appna collage");
    i++;
}while(i<=30);



//for of loops
 
let str = "Rakib Mou Sumiya"
let size = 0;
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log("size = ",size);


//for in loops 

let student = {
    name : "Rakib",
    gpa : 4.88,
    age : 17,
    isPass : true
};
for (let key in student){
    console.log(key, ":",student[key]);
}
//loos as1


for (i = 0; i <=100; i++){
    if(i%2===0){
        console.log("i = ",i);
    }
}


//qs 2: gussing game
//code

let myNum = 5;
let userNum = prompt("Enter numbar 1 to 10: ");
if (myNum == userNum){
    console.log("Your are enter writ numbar!!!",userNum);
}else{
    console.log("Your are enter wrong numbar. please try agin.",userNum);
}


//string 

let str = "Rakib";
console.log(str);
 

//str length

let str = "Rakib"
console.log(str.lengtn)/



//template litarul

let obj = {
    item : "Pen",
    price : 10,
}
let output = `The cost of ${obj.item}, is ${obj.price} rupess`;
console.log(output);




//string Methods
//toUpperCase()

let name = "Rakib";
console.log(name.toUpperCase());


//slice methods

let name = "Rakib";

console.log(name.slice(1.3));


//str.concat methods

let fastName = "Rakib";
let secoundName = "Hossen";
let conCat = fastName.concat( secoundName);
console.log(conCat);

//Arrays 

let marks = [90,98,88,84];
//change arry value
marks[1] = 90;
console.log(marks);
console.log(marks.length)


//Array loops 

let friends = ["Badhon","Shaon","Fishan"];
arryLangth = friends.length;
for (indx = 0; indx < arryLangth; indx++){
    console.log(friends[indx]);
}


//Qs.
let marks = [85,97,44,37,70,60];
let sumOfMarks = 85+97+44+37+70+60;
let arryLangth = marks.length
let avarageOfMark = sumOfMarks/arryLangth;
console.log(avarageOfMark);


//Qs --> 1

let mark = [85,97,44,37,70,60];
let sum = 0;
for (let val of mark){
    sum += val;
}
let avg = sum / mark.length
console.log(avg);*/

//Qs --> 2
let prices = [250,645,300,900,500];
for(let i = 0; i < prices.length; i++ ){
    console.log(`value of prices = ${prices[i]}`);
    let offer = prices[i]/10;
    prices[i] = prices[i] - offer;
    console.log(`The offer of 10% = ${prices[i]}`);
}


//Push()
let foodItem = ["Licchi","Banana","Chips"];
foodItem.push("Patato","Chococoko");
console.log(foodItem)


//Using concat
let myFriends = ["Badhon","Fishan","Shoan","Sameul","Other"];
let mySchoolFriends = ["Zehad","Khalid","Tasfi","Other"];
console.log(myFriends);
console.log(mySchoolFriends);
myAllFriends = myFriends.concat(mySchoolFriends);
console.log(myAllFriends);


//Slice
let product = ["Laptop","Computer","Phone"];
console.log(product.slice(1,10));

//Splice
let product = ["Laptop","Computer","Phone","Headphone"];
console.log(product);
console.log(product.splice(1,0,"Earphone"));

//Qs 1 
let companyName = ["Blomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log("Fast arry: ",companyName);
fastRemove = companyName.shift();
console.log("Remove : ",fastRemove);
console.log("New Arry: ",companyName);
removeAndAdd = companyName.splice(1,1,"Ola");
console.log("remove : ",removeAndAdd);
console.log("New add Arry Ola: ",companyName);
AddLast = companyName.push("Amazon");
console.log("Add last : Amazon: ",companyName)


//Functions 
function myFunction(){
    console.log("Hello, im larnig Function in js.");
    console.log("Im larning JS with appna collage");
}
myFunction();


//sum of 2 numbar using function
function sum(a,b){
    console.log(a+b);
}
sum(10,20);


//using Return 
function sum(a,b){
    sumOfNumbar = a+b;
    return sumOfNumbar;
}
let result = sum(10,30);
console.log(result);



//arrowFunction
const arrowSum = (a,b) =>{
    console.log(a+b);
}
arrowSum("sum = ",10,20);

//Function Qs => 1
function vowelCount (str){
    count = 0;
    for (const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count ++;
        }
    }
    console.log(count);
    
}
vowelCount("Hello");
console.log(count);


//Function  Qs => 2 using Arrow functon
let vowelCount = (str) => {
    let count = 0;
    for (const char of str){
        if (char === "a" || char === "e" || char === "i" || char == "o" || char ==="u"){
            count++;
        }
    }
    console.log(count);
}
vowelCount("aeiou");


//ForEcah loops
let arr = ["Rakib","Zehad","Kahlid"];
arr.forEach(function printVal(val){
    console.log(val)
});


//ForEach using arro
let arr = [1,2,3,4,5,6,7,8,9];
arr.forEach((val,indx,arr) =>{
    console.log(val,indx,arr)
});


//Qs of ForEach ==> 1
let value = [1,2,3,4,5,6,7,8,9];
value.forEach((squireVlaue) => {
    squireVlaue *= squireVlaue;
    console.log(squireVlaue);
});


//Array Map Mathods 
let arr = [20,40,50,60];
arr.map((val) => {
    console.log(val)
});


//using map to coppy array
let arr = [10,20,30,40,50];
let newArray = arr.map((val) =>{
    return val;
})
console.log(newArray);


//Filter Mathods in array
let numbar = [1,2,3,4,5,6,7,8,9,10];
let evenArray = numbar.filter((val) =>{
    return  val%2=== 0;
});
console.log(evenArray);


//Reduce
let arr = [1,2,3,4,5,6]
const output = arr.reduce((res,curr) =>{
    return res + curr/2;
});
console.log(output);

let marks = [70,80,90,100,99,98,100,60];
let newMarks = marks.filter((val) =>{
    return val > 90;
});
newMarks.forEach((val) => {
    console.log(val)
})


//Qs
let n = prompt("Enter a numbar");
let arr = [];
for(i = 0 ; i <= n; i++){
    arr[i-1] = i;
}

console.log(arr)

let sum = arr.reduce((res,curr) =>{
    return res+curr;
});
console.log("Sum of array: ",sum);

let factorial = arr.reduce((res,curr) =>{
   return res * curr
});
console.log("Factioral : ",factorial);
