fs.readFile("student.txt","utf-8",(err,data)=>{
if(err) throw err;
else{
console.log("reading a file content");
console.log(data);
}
});