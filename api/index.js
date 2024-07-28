const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World for shbham!");
});
app.get("/status", (req, res) => {
  res.send("Hello, World for status!");
});
app.get("/status:name", (req, res) => {
  const { id } = req.params;

  res.send(`name, ${name}!`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
