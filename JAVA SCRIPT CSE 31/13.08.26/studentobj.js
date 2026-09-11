let student = {
    name : "siddhant",
    roll : 69,
    CGPA : 9.1,
    isPass : true
};
// console.log(student) ;
// student.name = "sid";
// console.log(student.name);
let marks = [90, 80, 70, 60, 50];
// console.log(marks);
let info = [{
    name : 'Amit',
    city : 'Delhi',
    cgpa : 7.5,
},
{
    name : 'Rahul',
    city : 'Ghaziabad',
    cgpa : 9.8,
},
{
    name : 'Prateek',
    city : 'Mumbai',
    cgpa : 8.8,
},
{
    name : 'Rohit',
    city : 'Delhi',
    cgpa : 7.8,
},
{
    name : 'Ramesh',
    city : 'Mumbai',
    cgpa : 8.5,
},
{
    name : 'Ram',
    city : 'Mumbai',
    cgpa : 8.2,
},
{
    name : 'Ravi',
    city : 'Delhi',
    cgpa : 7.9,
},
{
    name : 'Rakesh',
    city : 'Ghaziabad',
    cgpa : 8.9,
},
{
    name : 'Mohit',
    city : 'Noida',
    cgpa : 9.1,
},
{
    name : 'Suresh',
    city : 'Noida',
    cgpa : 8.1,
}
]
console.table(info);
for(let i=0;i<info.length;i++){
    if(info[i].cgpa>8 && info[i].city == 'Mumbai'){
        console.log("Person with more cgpa than 8 and is from Mumbai : ",info[i].name);
    }
}



