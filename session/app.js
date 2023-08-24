const express = require("express")
const path = require("path")
const expressSession = require("express-session");
const expressSession = require("constants");
const path = require("path");

const app = express();

app.set("view engine", "ejs")


app.use(express.static(path.join(__dirname,"public")));

app.use(express.json());
app.use(express.urlencoded({extended :false}))

app.use(
    expressSession({
        secret : "hihi",
        resave : true,
        saveUninitialized : true
    })  
);

app.get("/",(req,res) => {
        if(req.session.user) {

            console.log("이미 로그인된 상태")
            return res.render(path.join(__dirname, "views","loging")
                , {username : requestAnimationFrame.session}
            )
        }
        else {

            res.requirect("index".html)
        }
});

app.post("/process/login", (req,res) => {
    const {password, username} = req.body

    if(req.session.user) {
        console.log("이미 로그인중");
        return res.render(path.join(__dirname,"views","loging")
            ,{username : req.session.user.id});
    }
    else{
        req.session.user = {
            id : username,
            pw : password,
            authorized :  true
        };
        return res.render(path.join(__dirname, "views", "logined"), {
            username : username
        })
    }
})

app.listen(3000);