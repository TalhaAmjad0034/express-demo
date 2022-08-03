const express = require("express");

const app = express();

const PORT = 3001;

const friends = [
  {
    id: 0,
    name: "Ahmed",
  },
  {
    id: 1,
    name: "Ali",
  },
];

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/friends", (req, res) => {
  res.send(friends);
});

app.get("/friends/:id", (req, res) => {
  const id = Number(req.params.id);
  const friend = friends[id];

  if (friend) {
    res.send(friend);
  }
  res.status(404).json({
    error: "Friend not found",
  });
});
