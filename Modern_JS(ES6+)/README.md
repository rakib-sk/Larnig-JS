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
```
Block Scope Example:
```js
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

| Feature | var | let | const |
| --- | --- | --- | --- |
| Scope | Function | Block | Block |
| Redeclare | Yes | No | No |
| Reassign | Yes | Yes | No |
| Initialize | Optional | Optional | Required |
| Hoisting | Yes | Yes (TDZ) | Yes (TDZ) |


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
  
