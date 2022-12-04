const mongoose = require("mongoose");
const router = require("express").Router();
const User = require("../models/register");

router.post(`/register`, (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      res.status(409).send({ message: "user already registered" });
    } else {
      const user = new User(req.body);
      user
        .save()
        .then((user) => {
          res
            .status(200)
            .json({ message: "user register successfully", user: user });
        })
        .catch((err) => {
          res.status(500).send({ message: err });
        });
    }
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne(
    {
      email: email,
    },
    (err, user) => {
      if (user) {
        if (user.password === password) {
          res
            .status(200)
            .send({ message: "user logged In successfully", user });
        } else {
          res.status(401).send({ message: "password didn't match" });
        }
      } else {
        res.status(500).send({ message: "user not registered" });
      }
    }
  );
});

module.exports = router;
