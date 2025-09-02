let userName = prompt("Enter your full Name widthout any space: ");
let userNameLowerCase = userName.toLowerCase();
let userNameLength = userNameLowerCase.length
let userOutput = `@${userNameLowerCase}${userNameLength}`;
console.log(userOutput);