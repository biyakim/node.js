const express = require('express');

const app = express();

app.get("/set",(req,res) => {
  res.setHeader("Set-Cookie","name=KY");
  res.setHeader("Set-Cookie","age=62");
  res.send("쿠키 set");
})

//쿠키 읽기
app.get("/get", (req,res) => {
  const cookie = req.headers.cookie;
  if(cookie) {
    const nameStartIdx = cookie.indexOf("name=")

    if(nameStartIdx > -1) {
      const name = cookie.substring(nameStartIdx + 5);
      const nameEndIdx = name.indexOf(";");

      if(nameEndIdx > -1) {
        name = name.substring(0,nameEndIdx);
        res.send(`Hello ${name}`);
      } //문자열 끝에 ';'이 없으면
      else {
        res.send(`Hello ${name}`);
      }
    }
    else {
      res.send("name이 존재하지 않음")
    }
    res.send(cookie);
  }
  else {
    res.send("쿠키가 없어요")
  }
});

app.listen(3000)