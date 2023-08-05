import express from "express";

const app = express();
app.use(express.json());

app.get("/test", (req, res) => {
  const clientIP = req.ip;
  res.send(`Your IP address is: ${clientIP}`);
});

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server started localhost 5000 port");
});
