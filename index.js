/** @format */
require("dotenv").config();
port = process.env.PORT;
const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
	res.send("Twitter Page");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
