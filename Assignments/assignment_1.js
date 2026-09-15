const fs=require("fs")
// C -> create a file and write file content.
fs.writeFile("student.txt","Name : Siddhant\nRoll Number : 55\nBranch : CSE\nSemester : 3rd ",(err)=>{
if(err)
{
    console.log(err);
}
else
{
    console.log("file successfully created")
}
});
