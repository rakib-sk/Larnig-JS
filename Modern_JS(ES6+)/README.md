
# Modern JavaScript Full Guide (ES6+ with DOM, OOP, LocalStorage)

এই README-তে Modern JavaScript এর সব গুরুত্বপূর্ণ বিষয় একসাথে দেওয়া হলো।  
এটা একেবারে Beginner ➜ Advanced লেভেল পর্যন্ত কভার করে।

---

## 🚀 1. Variables (let / const)

```js
let x = 10;
const y = 20;
🚀 2. Template Literals
Copy code
Js
const name = "Rakib";
console.log(`Hello, ${name}!`);
🚀 3. Arrow Functions
Copy code
Js
const sum = (a,b) => a + b;
🚀 4. Spread Operator (...)
Copy code
Js
const arr = [1,2,3];
const newArr = [...arr, 4,5];

const obj = {a:1};
const newObj = {...obj, b:2};
🚀 5. Rest Parameters
Copy code
Js
function total(...nums){
  return nums.reduce((a,b)=>a+b);
}
total(10,20,30);
🚀 6. Destructuring
Array
Copy code
Js
const [a,b] = [10,20];
Object
Copy code
Js
const {name, age} = {name:"Rakib", age:17};
🚀 7. Loops (for, for..of, for..in)
For..of (Array)
Copy code
Js
for (let val of [10,20,30]) console.log(val);
For..in (Object)
Copy code
Js
const user = {name:"Rakib", age:17};
for (let key in user) console.log(key, user[key]);
🚀 8. Array Functions (map, filter, reduce)
map()
Copy code
Js
[1,2,3].map(n => n*2);
filter()
Copy code
Js
[1,2,3,4,5].filter(n => n%2===0);
reduce()
Copy code
Js
[1,2,3].reduce((a,b)=>a+b);
🚀 9. Functions + Return
Copy code
Js
function add(a,b){
  return a+b;
}
🚀 10. OOP (Class, Constructor)
Copy code
Js
class User {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  info(){
    return `${this.name} is ${this.age} years old`;
  }
}

const u1 = new User("Rakib", 17);
console.log(u1.info());
🚀 11. Inheritance
Copy code
Js
class Admin extends User {
  constructor(name, age, role){
    super(name, age);
    this.role = role;
  }
  details(){
    return `${this.name} is an ${this.role}`;
  }
}

const a1 = new Admin("Rakib", 17, "Admin");
console.log(a1.details());
🚀 12. Async/Await + Fetch
Copy code
Js
async function loadData(){
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}
loadData();
🚀 13. Promise
Copy code
Js
const work = new Promise((resolve, reject)=>{
  const ok = true;
  ok ? resolve("Done!") : reject("Error!");
});

work.then(msg=>console.log(msg)).catch(err=>console.log(err));
🚀 14. DOM (Deeply Explained)
Select Elements
Copy code
Js
document.querySelector(".box");
document.querySelectorAll(".item");
Change Text / HTML
Copy code
Js
box.innerText = "Hello";
box.innerHTML = "<b>Bold</b>";
Change Style
Copy code
Js
box.style.color = "red";
box.style.background = "black";
Create Elements
Copy code
Js
const div = document.createElement("div");
div.textContent = "New Item";
document.body.appendChild(div);
Remove Element
Copy code
Js
div.remove();
🚀 15. DOM Events
Copy code
Js
document.querySelector("button")
  .addEventListener("click", () => {
    console.log("Clicked!");
  });
🚀 16. Form Handling (Manual)
Copy code
Js
form.addEventListener("submit", e=>{
  e.preventDefault();
  const name = document.querySelector("#name").value;
  console.log("Submitted:", name);
});
🚀 17. LocalStorage (Full CRUD)
Save String
Copy code
Js
localStorage.setItem("name", "Rakib");
Read
Copy code
Js
localStorage.getItem("name");
Delete
Copy code
Js
localStorage.removeItem("name");
Clear All
Copy code
Js
localStorage.clear();
🚀 18. Save Object in LocalStorage
Save
Copy code
Js
const user = {name:"Rakib", age:17};
localStorage.setItem("user", JSON.stringify(user));
Read
Copy code
Js
const data = JSON.parse(localStorage.getItem("user"));
console.log(data);
🚀 19. Save Array in LocalStorage
Copy code
Js
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(task){
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addTask("Learn JS");
addTask("Create project");
🚀 20. Fetch Data + Show in DOM
Copy code
Js
async function loadUsers(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const ul = document.getElementById("list");

  users.forEach(u=>{
    const li = document.createElement("li");
    li.textContent = u.name;
    ul.appendChild(li);
  });
}

loadUsers();
🎉 Summary
এই README.md একসাথে কভার করেছে—
✔ Modern JavaScript (ES6+)
✔ DOM Deep
✔ Events
✔ Async/Await
✔ OOP + Classes + Inheritance
✔ LocalStorage (Arrays + Objects)
✔ Fetch API
✔ Array methods (map/filter/reduce)
