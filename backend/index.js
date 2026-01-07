const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend running");
});

// BOOKS ROUTE
app.get("/books", (req, res) => {
  res.json([
    { id: 1, title: "Artificial Intelligence", category: "AI" },
    { id: 2, title: "Machine Learning", category: "ML" },
    { id: 3, title: "Deep Learning", category: "DL" },
    { id: 4, title: "Cloud Computing", category: "Cloud" }
  ]);
});

// 👉 FACE ATTENDANCE ROUTE (IMPORTANT)
app.get("/start-face-attendance", (req, res) => {
  exec("python face_recognition/face_attendance.py", (error) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Camera error");
    }
    res.send("Attendance marked after face scan");
  });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
