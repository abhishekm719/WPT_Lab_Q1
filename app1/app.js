import express from "express";
const app = express();

app.get("/getNumber", (req, res) => {
  const phoneNumber = "9998589654";
  res.send(phoneNumber);
});

app.use((req, res, next) => {
  if (!req.headers.auth) {
    res.status(401).json({
      Error: {
        errcode: "401 - Unauthorized access",
        errormessage: "Login to access the requested resource",
      },
    });
  } else {
    next();
  }
});

app.get("/getName", (req, res) => {
  const name = "Abhishek Mandhare";
  res.send(name);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
