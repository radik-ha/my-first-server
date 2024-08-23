const express = require("express");
const app = express();

const PORT = 5000;

app.get("/getpath", (req, res)=>{
	res.send("<h1>Hello</h1>")
})

app.get("/yourname", (req, res)=>{
	res.send("<h1>I am Radhika!</h1>")
})

app.listen(PORT, ()=>{
	console.log("I AM WAITING FOR A REQUEST FROM CLIENT SIDE/FRONTEND")
})