//working with directories and file paths.
const path = require("path");
// using express application framework
const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.set("content-type", "text/html");
    res.sendFile(__dirname + "/public/bmi.html");
  });

app.post("/", (req, res) => {

    const {height,weight } = req.body;

    getResult = weight / Math.pow(height,2);

    res.set("content-type", "application/json");
    //The HTTP 200 OK success status response code indicates that the request has succeeded -> retrun the result

    res.status(200).json({getResult});
});

app.listen(port, () =>{
    console.log(`Server started at port ${port}`);
})


