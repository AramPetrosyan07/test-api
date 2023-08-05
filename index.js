import express from "express";

const app = express();
app.use(express.json());

app.get("/test", (req, res) => {
  const clientIP = req.ip;
  res.send(`Your IP address is: ${clientIP}`);
});

app.get("/test2", (req, res) => {
  const clientIP = req.connection.remoteAddress;
  res.send(`Your IP address is: ${clientIP}`);
});

app.get("/test3", (req, res) => {
  const clientIP =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.send(`Your IP address is: ${clientIP}`);
});

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server started localhost 5000 port");
});
