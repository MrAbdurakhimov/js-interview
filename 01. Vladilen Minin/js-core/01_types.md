# 01 Data Types

Data Types in JS are: `null, undefined, boolean, number, string, object, sybol`

```javascript
console.log(typeof 0); //number
console.log(typeof "This is String"); //string
console.log(typeof `This is String`); //string
console.log(typeof undefined); //undefined
console.log(typeof {}); //object
console.log(typeof Math); //object
console.log(typeof null); //object !!
console.log(typeof Symbol("JS")); //symbol
console.log(typeof (12 > 11)); //boolean
console.log(typeof function () {}); //function | In reality no such type is exsistant.
console.log(typeof NaN); //number !!
```

**1. Difference between null and undefined.**

- When ypu declare variable and not define the value it is undefined.
- Functions not returning anything are by default return undefined.

```javascript
console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean("0")); //true
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false

console.log(Boolean([])); //true !!
console.log(Boolean({})); //true !!
console.log(Boolean(function () {})); //true !!
```

## Shocking moments

```javascript
console.log(false == []); //true !!!!
console.log(false == {}); //false
console.log({} == []); //false
```
