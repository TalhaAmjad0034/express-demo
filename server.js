const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");

const app = express();
const PORT = 3001;

app.use("/site", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "My Friends Are VERYY Clever",
    caption: "Let's go skiing!",
  });
});

app.use("/friends", friendsRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
