# Modern JavaScript Variable System (var, let, const)

## JavaScript–এ variable declare করার তিনটি প্রধান কীওয়ার্ড হলো **var**, **let**, এবং **const**।  
## Modern JavaScript (ES6+) এ `let` এবং `const` স্ট্যান্ডার্ড, আর `var` শুধু পুরনো কোডের জন্য রাখা হয়েছে।

---

## 1. var
`var` হলো JavaScript–এর প্রথম দিকের variable system।

### বৈশিষ্ট্য:
- Function scoped  
- Redeclare করা যায়  
- Hoisting হয় (value undefined থাকে)  
- Block scope মানে না  

### উদাহরণ:
```js
var x = 10;
var x = 20; // allowed
```
## সমস্যা:
```js
if (true) {
  var a = 5;
}
console.log(a); // 5 (unexpected behavior)
```

## 2. let
- let হল Modern JavaScript–এর মূল variable system।
## বৈশিষ্ট্য:
- Block scoped
- Redeclare করা যায় না
- Hoisting হয় কিন্তু TDZ (Temporal Dead Zone) থাকে
## উদাহরণ:
```js
let name = "Rakib";
name = "Hasan"; // allowed
// let name = "Test"; // ❌ not allowed
Block Scope Example:
Copy code
Js
if (true) {
  let temp = 50;
}
// console.log(temp); // ❌ Error
```

## 3. const
- const মানে constant variable।
- একবার মান set করলে আর পরিবর্তন করা যায় না।
## বৈশিষ্ট্য:
- Block scoped
- Reassign করা যায় না
- অবশ্যই initialize করতে হয়
- কিন্তু Object/Array এর ভিতরের data পরিবর্তনযোগ্য

##উদাহরণ:
```js
const pi = 3.1416;
// pi = 4; // ❌ Error

const user = { name: "Rakib" };
user.name = "Hasan"; // allowed
```

## 4. let vs const — কোনটা ব্যবহার করা উচিত?
- Default choice: const
- যখন মান পরিবর্তন হবে: let
- Avoid: var (bug তৈরি হয়)

## 5. Scope Difference Summary
```js
| Feature | var | let | const |
| --- | --- | --- | --- |
| Scope | Function | Block | Block |
| Redeclare | Yes | No | No |
| Reassign | Yes | Yes | No |
| Initialize | Optional | Optional | Required |
| Hoisting | Yes | Yes (TDZ) | Yes (TDZ) |
```

## 6. Hoisting Explained
```js
console.log(a); // undefined
var a = 10;

console.log(b); // ❌ Error: TDZ
let b = 20;

console.log(c); // ❌ Error: TDZ
const c = 30;
```

## 7. Best Practices in Modern JavaScript
- Default → const
- যেখানে দরকার → let
- var পুরোপুরি Avoid করো
- কোড readable এবং bug-free রাখতে block scope follow করো
- Always use meaningful variable names

# 8. Quick Summary
- var → পুরনো system, function scoped
- let → modern, block scoped, flexible
- const → modern, block scoped, unchangeable binding

## এগুলো ঠিকভাবে ব্যবহার করলে কোড clean, predictable, এবং maintainable হয়।for (let key in user) console.log(key, user[key]);
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
