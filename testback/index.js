const express  = require("express");

const app = express();

const port = 3000;
app.get('/',(req, res) => res.send("you are in Home page"));
app.get('/login',(req, res) => res.send("You are in Login page"));
app.get('/sign',(req, res) => res.send("Hey, You are siginout from this page"));
app.get('/gaurav',(req, res) => res.send("Hey, I am using instagram"));

app.listen(port,() => console.log(`Example is listing to port ${port}!`));