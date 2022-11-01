import express from 'express';

const PORT = 5000;
const app = express();

app.get("/api", (req, res) => {
  res.send("hello !!!!");
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
