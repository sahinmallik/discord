const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application" });
});
app.listen(8080, () => {
  console.log("server is running at the port no: 8080");
});
