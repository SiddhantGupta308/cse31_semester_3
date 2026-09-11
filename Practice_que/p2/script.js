function submitForm(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;
    let department = document.getElementById("department").value;
    document.getElementById("message").innerHTML =
        "Registration Successful!<br>" +
        "Welcome, " + name + "<br>" +
        "Roll No: " + roll + "<br>" +
        "Course: " + course + "<br>" +
        "Department: " + department;
}