import express from 'express';
import cors from 'cors';

const PORT = 5000;
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.send("hello !");
});

app.listen(PORT, () => console.log(`server start on port : ${PORT}`));
