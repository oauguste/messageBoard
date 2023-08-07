const express = require("express");
var router = express.Router();
const { messages, pushMessage } = require("../data");

router.get("/", (req, res) => {
  res.render("new", {
    title: "Express",
  });
});

router.post("/", (req, res) => {
  try {
    const author = req.body.author;
    const message = req.body.message;
    if (
      !author ||
      !message ||
      author.trim() === "" ||
      message.trim() === ""
    ) {
      return res.status(400).send("Invalid input");
    }
    pushMessage(author, message);
    res.redirect("/");
  } catch (error) {
    console.log(
      "Error while processing the request",
      error
    );
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
