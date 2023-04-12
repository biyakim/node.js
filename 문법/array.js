const arr = ['apple','banana', 'cherry', 'apple'];

//data: 데이터, index: 데이터에 해당하는 index(생략가능)
arr.forEach(function(data, index) {
  //console.log(`${index} : ${data}`);
})

//return 값이 true에 해당하는 index 반환,
const cherryIndex = arr.findIndex(data => data === 'cherry');
//console.log(cherryIndex)


arr.push('grape');
console.log(arr);

const x = arr.pop();
console.log(x);
console.log(arr)