const str = "Hello world";

console.log(str.length);

console.log(str.slice(1,5));
console.log(str.slice(1));
console.log(str.slice(-2))

a = str.replace('world', 'everyone');
console.log(a);

console.log(str.toUpperCase()); //'HELLO WORLD'
console.log(str.toLowerCase()); // 'hello world'

console.log(str.includes('world')); //true
console.log(str.includes('hello')) //ture

console.log(str)