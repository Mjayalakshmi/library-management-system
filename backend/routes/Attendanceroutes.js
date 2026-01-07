const router = require("express").Router();
const Attendance = require("../models/Attendance");

router.post("/", async (req, res) => {
  const record = new Attendance(req.body);
  await record.save();
  res.send(record);
});

router.get("/", async (req, res) => {
  res.send(await Attendance.find());
});

module.exports = router;
