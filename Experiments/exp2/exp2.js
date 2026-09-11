// Perform CRUD operation on file using fs(file system) module.
const fs=require("fs")
// C -> create a file and write file content.
// fs.writeFile("student.txt","this is student file",(err)=>{
// if(err)
// {
//     console.log(err);
// }
// else
// {
//     console.log("file successfully created")
// }
// });

// R-> Reading a file
// fs.readFile("student.txt","utf-8",(err,data)=>{
// if(err) throw err;
// else{
// console.log("reading a file content");
// console.log(data);
// }
// });

// U-> update a file content
// fs.appendFile("student.txt"," for CSE 31 batch2",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File successfully updated")
//     }
// });

// D-> Delete a file 
fs.unlink("student.txt",(err)=>{
    if(err) throw err;
    else{
        console.log("file deleted successfully");
    }
});
