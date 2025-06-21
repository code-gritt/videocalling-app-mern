import express from "express";

const app = express();
const PORT = 5001;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
