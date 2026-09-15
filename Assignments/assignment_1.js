const fs = require("fs");

// 1. create/write
fs.writeFileSync("student.txt", "Name: Siddhant Gupta.\nRoll Number: 1150\nBranch: CSE\nSemester: 3rd");
console.log("file successfully created");

// 2. read
fs.readFileSync("student.txt");
console.log("reading a file content");

// 3. update
fs.appendFileSync("student.txt", "\nSubject: Full Stack Development\nMarks: 85\nAttendance: 91%");
console.log("file successfully updated");

// 4. read again
fs.readFileSync("student.txt");
console.log("reading updated file content");