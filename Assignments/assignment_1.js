// const fs=require("fs")
// // C -> create a file and write file content.
// fs.writeFileSync("student.txt","Name : Siddhant\nRoll Number : 55\nBranch : CSE\nSemester : 3rd ");
//  console.log("file successfully created")


// // R-> Reading a file
// fs.readFileSync("student.txt","utf-8",(err,data)=>{
// if(err) throw err;
// else{
// console.log("reading a file content");
// console.log(data);
// }
// });

// U-> update a file content
fs.appendFileSync("student.txt","/nSubject : FSD\nMarks : 85\nAttendence : ",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File successfully updated")
    }
});