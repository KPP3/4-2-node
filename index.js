const express = require("express");
const app = express();

let studentsName = ["Student1", "Student2", "Student3", "Student4", "Student5"];

app.get("/", (req, res) => {
    console.log(studentsName);
    res.end();
})

app.post("/", (req, res) => {
    studentsName.push("randomStudent")
    console.log(studentsName);
    res.end();
})

app.delete("/", (req, res) => {
    studentsName.pop()
    console.log(studentsName);
    res.end();
})


app.listen(3434)