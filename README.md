# JavaScript Complete Handbook  
A full beginner-to-advanced guide based entirely on practical code examples.

---

# 📌 Table of Contents
1. Introduction  
2. Variables (let, const, var)  
3. Data Types  
4. Operators  
5. Conditional Statements  
6. Loops  
7. Strings  
8. Template Literals  
9. Arrays  
10. Array Methods (Push, Pop, Slice, Splice, Concat)  
11. Loops on Arrays (for, for-of, for-in, forEach)  
12. Functions  
13. Arrow Functions  
14. Higher Order Functions (map, filter, reduce)  
15. Practice Problems  
16. Summary  

---

# 1. ⭐ Introduction
JavaScript হলো web-এর programming language।  
Browser সরাসরি JavaScript রান করতে পারে।  
JS দিয়ে calculation, UI, logic control, API call—সব করা যায়।

---

# 2. ⭐ Variables  
JavaScript এ ৩ ধরনের variable আছে:

### `let`
- Value পরিবর্তন করা যায়  
```js
let a = 8;
a = 10;
```

### `const`
- Value পরিবর্তন করা যায় না  
```js
const pi = 3.1416;
```

### `var`
- পুরোনো system  
- ব্যবহার না করাই ভালো

---

# 3. ⭐ Data Types
### **Primitive Types**
- Number  
- String  
- Boolean  
- Null  
- Undefined  

Example:
```js
let age = 17;   
let name = "Rakib";
let pass = true;
let x = null;
let y = undefined;
```

---

# 4. ⭐ Operators
### Arithmetic
```js
a + b  
a - b  
a * b  
a / b  
a % b  
```

### Comparison
```js
a < b  
a > b  
a === b  
a !== b  
```

### Logical
```js
&&  
||  
!  
```

---

# 5. ⭐ Conditional Statements

## if statement
```js
let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}
```

## if–else
```js
let bg = "light";
let bgColor;

if (bg === "dark") {
    bgColor = "Black";
} else {
    bgColor = "White";
}
```

## odd/even checker
```js
let num = 10;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

## Ternary Operator
```js
let age = 18;
let result = age >= 18 ? "Adult" : "Not adult";
```

---

# 6. ⭐ Loops

## For Loop
```js
for (let i = 1; i <= 10; i++) {
    console.log("My name is Rakib");
}
```

## Sum 1–5
```js
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("sum =", sum);
```

## While Loop
```js
let i = 1;
while (i <= 5) {
    console.log("Appna College");
    i++;
}
```

## Do–While
```js
let i = 20;
do {
    console.log("Appna College");
    i++;
} while (i <= 30);
```

## Loop Even Numbers 1–100
```js
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) console.log(i);
}
```

---

# 7. ⭐ Strings

```js
let str = "Rakib";
console.log(str.length);
```

## toUpperCase
```js
console.log(str.toUpperCase());
```

## slice
```js
console.log(str.slice(1, 3));
```

## concat
```js
let name1 = "Rakib";
let name2 = "Hossen";
console.log(name1.concat(name2));
```

---

# 8. ⭐ Template Literals (Template Strings)
```js
let item = { name: "Pen", price: 10 };
let output = `The cost of ${item.name} is ${item.price} taka.`;
console.log(output);
```

---

# 9. ⭐ Arrays
```js
let marks = [90, 98, 88, 84];

// Change value
marks[1] = 90;

console.log(marks);
console.log(marks.length);
```

---

# 10. ⭐ Array Methods

## push()
```js
let items = ["Lichi", "Banana"];
items.push("Chips");
```

## concat()
```js
let a = ["Rakib"];
let b = ["Zehad"];
let c = a.concat(b);
console.log(c);
```

## slice()
```js
let product = ["Laptop","Computer","Phone"];
console.log(product.slice(1, 3));
```

## splice()
```js
let product = ["Laptop","Computer","Phone"];
product.splice(1, 0, "Earphone");
console.log(product);
```

---

# 11. ⭐ Looping on Arrays

## for loop
```js
let friends = ["Badhon","Shaon","Fishan"];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
```

## for-of
Better for values:
```js
for (let val of friends) {
    console.log(val);
}
```

## for-in
Better for objects:
```js
let student = {
    name: "Rakib",
    gpa: 4.88,
    age: 17
};

for (let key in student) {
    console.log(key, student[key]);
}
```

---

# 12. ⭐ Functions

### Basic Function
```js
function myFunction() {
    console.log("Learning JS!");
}
myFunction();
```

### Function with parameters
```js
function sum(a, b) {
    console.log(a + b);
}
sum(10, 20);
```

### Function with return
```js
function sum(a, b) {
    return a + b;
}
let result = sum(10, 30);
console.log(result);
```

---

# 13. ⭐ Arrow Functions

```js
const arrowSum = (a, b) => {
    console.log(a + b);
};
arrowSum(10, 20);
```

---

# 14. ⭐ Higher Order Array Methods

## forEach()
```js
let arr = [1,2,3,4];
arr.forEach(val => console.log(val));
```

## map()
```js
let arr = [10,20,30];
let newArr = arr.map(val => val * 2);
console.log(newArr);
```

## filter()
```js
let nums = [1,2,3,4,5,6];
let even = nums.filter(val => val % 2 === 0);
console.log(even);
```

## reduce()
```js
let arr = [1,2,3,4,5];
let sum = arr.reduce((res, curr) => res + curr, 0);
console.log(sum);
```

---

# 15. ⭐ Practice Problems

### Count Vowels
```js
function vowelCount(str) {
    let count = 0;
    for (let char of str) {
        if ("aeiou".includes(char)) count++;
    }
    console.log(count);
}
vowelCount("hello");
```

### Discount on Prices
```js
let prices = [250,645,300,900,500];

for (let i = 0; i < prices.length; i++) {
    let offer = prices[i] / 10;
    prices[i] -= offer;
    console.log(prices[i]);
}
```

---

# 16. ⭐ Summary (Full JS in Short)

- Variables: let, const  
- Data types  
- Operators  
- Conditions  
- Loops  
- Strings & Methods  
- Arrays & Methods  
- Functions  
- Arrow Functions  
- Map, Filter, Reduce  
- Template Literals  
- Object loop (for-in)  

This README.md covers 90% of JavaScript used in real projects.

---
# DOM Masterclass – Complete Deep Guide (README.md)

এই ডকুমেন্টে তুমি DOM–এর পুরো ধারণা, selector, traversal, manipulation, events, event bubbling, delegation, dynamic elements, forms, attributes, styling, classes, nodes, nodeList বনাম HTMLCollection—সব A to Z শিখবে।

---

# 📌 Table of Contents
1. What is DOM  
2. How Browser Creates DOM  
3. Selecting Elements  
4. Changing Content (innerHTML, textContent, innerText)  
5. Changing Attributes  
6. Changing CSS Styles  
7. Adding & Removing Classes  
8. Creating Elements (createElement)  
9. Adding Elements to Page (append, prepend, before, after)  
10. Removing Elements  
11. Node vs Element  
12. Traversing DOM (parent, children, siblings)  
13. Event Listeners  
14. Event Object  
15. Event Bubbling & Capturing  
16. Event Delegation  
17. Forms & Input Handling  
18. DOM Projects (Mini tasks)  
19. Summary  

---

# 1. ⭐ What is DOM?
DOM = Document Object Model  
HTML কে JS দিয়ে control করার জন্য browser যে object-based tree বানায় সেটা DOM।

- HTML → DOM Tree  
- Each tag → Node  
- JS DOM দিয়ে HTML কে Modify, Delete, Create, Update করা যায়।

---

# 2. ⭐ How Browser Creates DOM
Browser HTML পড়ে → Tag ধরে → Tree বানায় → প্রতিটা element কে object বানিয়ে JS এর access দেয়।

Example tree:
```
document
 └── html
      ├── head
      └── body
          ├── h1
          └── p
```

---

# 3. ⭐ Selecting Elements

## getElementById
```js
let title = document.getElementById("main");
```

## getElementsByClassName
```js
let boxes = document.getElementsByClassName("box");
```

## getElementsByTagName
```js
let paras = document.getElementsByTagName("p");
```

## querySelector (first match)
```js
let el = document.querySelector(".box");
```

## querySelectorAll (NodeList)
```js
let items = document.querySelectorAll(".item");
```

---

# 4. ⭐ Changing Content

## innerText
- শুধু visible text  
```js
title.innerText = "Hello Rakib!";
```

## textContent
- Hidden textও দেয়  
```js
title.textContent = "New Text";
```

## innerHTML
- HTML কোড set করা যায়  
```js
div.innerHTML = "<b>Bold Text</b>";
```

---

# 5. ⭐ Changing Attributes

## getAttribute
```js
let link = document.querySelector("a");
console.log(link.getAttribute("href"));
```

## setAttribute
```js
link.setAttribute("href", "https://google.com");
```

---

# 6. ⭐ Changing CSS Styles (JS থেকে Style)

```js
let box = document.querySelector(".box");

box.style.backgroundColor = "black";
box.style.color = "white";
box.style.borderRadius = "10px";
```

---

# 7. ⭐ Adding & Removing Classes

```js
div.classList.add("active");
div.classList.remove("active");
div.classList.toggle("dark-mode");
```

---

# 8. ⭐ Creating Elements Dynamically

```js
let newDiv = document.createElement("div");
newDiv.innerText = "Hello Rakib!";
```

---

# 9. ⭐ Adding to DOM

### append() → Last child
```js
document.body.append(newDiv);
```

### prepend() → First child
```js
document.body.prepend(newDiv);
```

### before() → Element এর আগে
```js
div.before(newDiv);
```

### after() → পরে
```js
div.after(newDiv);
```

---

# 10. ⭐ Removing Elements

```js
let msg = document.querySelector(".msg");
msg.remove();
```

---

# 11. ⭐ Node vs Element
- **Node** = text, comment, element সব  
- **Element** = শুধু HTML elements  

Example:
```js
div.childNodes  // text + elements
div.children    // only elements
```

---

# 12. ⭐ DOM Traversal

## parentElement
```js
let p = document.querySelector("p");
console.log(p.parentElement);
```

## children
```js
let list = document.querySelector("ul");
console.log(list.children);
```

## firstChild vs firstElementChild
```js
list.firstChild             // text node
list.firstElementChild      // li element
```

## nextSibling vs nextElementSibling
```js
div.nextElementSibling;
div.previousElementSibling;
```

---

# 13. ⭐ Event Listeners

## Click Event
```js
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    console.log("Button clicked!");
});
```

## Mouse Events
- click  
- dblclick  
- mouseover  
- mouseout  
- contextmenu (right click)

---

# 14. ⭐ Event Object

```js
btn.addEventListener("click", (event) => {
    console.log(event);
});
```

Useful:
```js
event.target
event.type
event.clientX
event.clientY
```

---

# 15. ⭐ Event Bubbling & Capturing

## Default Bubble Flow: Child → Parent → Document

```js
child.addEventListener("click", () => console.log("Child"));
parent.addEventListener("click", () => console.log("Parent"));
```

## Capturing Flow: Parent → Child  
```js
parent.addEventListener("click", handler, true);
```

---

# 16. ⭐ Event Delegation (Most Powerful Concept)
যখন অনেক elements dynamically তৈরি হবে, তখন প্রতিটায় event লাগানো ভুল।  
Parent-এ event বসানো হয় → target দিয়ে child detect করা হয়।

```js
document.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log("LI clicked:", e.target.innerText);
    }
});
```

---

# 17. ⭐ Forms & Input Handling

## Getting input value
```js
let input = document.querySelector("#name");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input.value);
});
```

---

# 18. ⭐ Mini DOM Projects (Practice)

### 1. Color Change Button  
Button click → background color change  
Use: style + eventListener

### 2. Todo App  
- Input  
- Add button  
- List append  
- Remove on click  
Use: createElement + append + event delegation

### 3. Counter App  
- + button  
- – button  
Use: innerText update

### 4. Dark Mode Toggle  
Use: classList.toggle()

### 5. Live Character Count  
Use: input event  
Update length with textContent

(চাইলেই আমি এগুলোর full code তোমাকে তৈরি করে দিতে পারি।)

---

# 19. ⭐ Summary (DOM in One Page)

- DOM হলো JS দিয়ে HTML control করার system  
- element select: id, class, tag, querySelector  
- content update: innerText, textContent, innerHTML  
- attribute: getAttribute, setAttribute  
- style: element.style  
- classList: add, remove, toggle  
- createElement → append/prepend/before/after  
- remove()  
- traversal: parent, children, siblings  
- events: click, input, keydown, submit  
- bubbling, capturing, delegation  

DOM এ mastery মানে JS front-end development এর 50% শেষ।

---

# End of DOM Masterclass
