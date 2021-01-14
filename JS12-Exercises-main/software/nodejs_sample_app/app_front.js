
console.log("Hello World");

// how to connect to a DB and show on console / web page


// Make a connection to the database server
// var connection = mysql2.createConnection(local_dbhost);




// This is not working yet
function showData(result) {
    let elementLi = document.createElement("<li>");
    let studentList = document.getElementById("studentList");
    let appendEl = studentList.appendChild(elementLi)

    for (res of result) {
        return appendEl;
    }

} 