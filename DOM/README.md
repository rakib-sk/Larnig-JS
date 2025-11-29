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
