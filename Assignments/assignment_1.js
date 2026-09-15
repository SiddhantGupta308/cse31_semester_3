const fs = require("fs");

// 1. create/write
fs.writeFileSync("siddhant1150.txt", "Name: Siddhant Gupta.\nRoll Number: 1150\nBranch: CSE\nSemester: 3rd");
console.log("file successfully created");

// 2. read
fs.readFileSync("siddhant1150.txt");
console.log("reading a file content");

// 3. update
fs.appendFileSync("siddhant1150.txt", "\nSubject: Full Stack Development\nMarks: 85\nAttendance: 91%");
console.log("file successfully updated");

// 4. read again
fs.readFileSync("siddhant1150.txt");
console.log("reading updated file content");