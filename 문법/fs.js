const fs = require('fs');
const path = require('path')

//__dirname : 현재 디렉토리의 절대경로
console.log(__dirname);

// 해당 경로에 있는 파일 목록의 배열을 반환
const files = fs.readdirSync(__dirname);

//특정파일의 전체(절대)경로
//result = __direname + '\\' + files[1]
//문자열 합치는 것보다 join을 사용하는 것을 권장(경로방식을 운영체제에 맞춰서 처리해줌)
result = path.join(__dirname,files[1]);
console.log(result)

console.log(path.basename(result));

const copyedFile = path.join(__dirname, '복사한파일.js')
fs.copyFileSync(reuslt, copyedFile)
fs.unlinkSync(copyedFile);

console.log(fs.statSync(result));
