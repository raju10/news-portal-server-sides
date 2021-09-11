const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const addAdmainSchema = require("../schemas/addAdmainSchema");

const Admain = new mongoose.model("Admain", addAdmainSchema);
// Get all tha todos

router.get("/", async (req, res) => {
  await Admain.find({}, (err, data) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        rasult: data,
        message: "Admain was inserted succesfully",
      });
    }
  });
});

// Get a todo by Id

router.get("/:id", async (req, res) => {});
// post a todo

router.post("/", (req, res) => {
  const newAdmain = new Admain(req.body);
  console.log(newAdmain);
  newAdmain.save((err) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        message: "Admain was inserted succesfully",
      });
    }
  });
});
// post multiple todo

router.post("/all", async (req, res) => {
  await Admain.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        message: "Todo was inserted succesfully",
      });
    }
  });
});

// put todo update

router.put("/:id", async (req, res) => {
  const rasult = await Admain.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: "yooo",
        description: "i love niha aa a",
      },
    },
    {
      new: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: err,
          status: false,
        });
      } else {
        res.status(200).json({
          message: "Todo was inserted succesfully",
        });
      }
    }
  );
  console.log(rasult);
});

// delete todo

router.delete("/:id", async (req, res) => {
  await Admain.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        message: "Todo was inserted succesfully",
      });
    }
  });
});

/////////
// Get single user MakeAdmins
router.get("/:email", async (req, res) => {
  const email = req.params.email;

  await Admain.find({ email: email }, (err, data) => {
    if (err) {
      res.status(500).json({
        error: "Ops.... Somthing else. ",
      });
    } else {
      res.status(200).json({
        data: data,
        messages: "Success",
      });
    }
  });
});
////////

module.exports = router;
