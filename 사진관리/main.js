const fs = require('fs');
const path = require('path');

// dirPath에 있는 모든 파일목록의 배열(하위 경로까지)
function getAllFiles(dirPath, arrOfFiles) {
  // dirPath에 있는 모든 파일 목록의 배열(하위 경로는 불가)
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const destPath = dirPath + '\\' + file;

    if(fs.statSync(destPath).isDirectory()) {
      // 디렉토리라면 해당 폴더에 있는 모든 파일목록들을 체크
      getAllFiles(destPath, arrOfFiles);
    } else {
      // 파일이면 파일 목록에 추가
      arrOfFiles.push(destPath);
    }
  });

  return arrOfFiles;
}

const files = getAllFiles(__dirname + '\\base', []);
console.log(files)  