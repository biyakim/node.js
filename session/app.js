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

app.get("/",(req.res) => {
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

app.listen(3000);