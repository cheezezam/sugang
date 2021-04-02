const express = require("express");
const router = express.Router();
//const { Subject } = require("../models/Subject");
const { nSubject } = require("../models/nSubject");
const { nnSubject } = require("../models/nnSubject");
router.post("/applySubject", (req, res) => {
  const nnsubject = new nnSubject(req.body);

  nnsubject.save((err, result) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      result,
    });
  });
});

router.post("/getSubject", (req, res) => {
  let variable = {};

  if (req.body.user) {
    variable = { user: req.body.user };
  }

  nnSubject.find(variable)

    .populate("user")
    .exec((err, result) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(200).json({ success: true, result });
    });
});

router.post("/ngetSubject", (req, res) => {
  let variable = {};

  if (req.body.user) {
    variable = { user: req.body.user };
  }

  nSubject.find(variable)

    .populate("user")
    .exec((err, result) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(200).json({ success: true, result });
    });
});

router.post("/deleteSubject", (req, res) => {
  nnSubject.findOneAndDelete({subjectName : req.body.subjectName}).exec((err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).json({ success: true, result });
  });
});

module.exports = router;
