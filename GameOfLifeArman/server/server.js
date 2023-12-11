// const Square = require("./square");

// var express = require("express");
// let Sq = require("./square")

// let sq  =new Square(45)
// console.log(sq.count());
// var app = express();

// app.use(express.static("."));

// app.get("/", function(req, res){
// res.redirect("index.html");
// });

// app.listen(3000, function(){
// console.log("Example is running on port 3000");
// });
// var fs = require('fs');

// function main(){
// var file = "hello.txt";

// fs.appendFileSync("Arman.txt", "Hello world");
// }
// main();\


let fs = require('fs');
function main(){
fs.writeFile("hello.txt", "Hello world\n", function(err){
console.log("fs.writeFile ended");
});
console.log("fs.writeFile");
}
main();