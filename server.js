const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const sendMail = require("./utils/mailer");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/on-track", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

const rewardController = require("./controllers/rewardController");
const taskController = require("./controllers/taskController");
const studentController = require("./controllers/studentController");
const teacherController = require("./controllers/teacherController");
const signupController = require("./controllers/signupController");
const AuthController = require("./controllers/authController");

app.use("/api/rewards", rewardController);
app.use("/api/tasks", taskController);
app.use("/api/students", studentController);
app.use("/api/teachers", teacherController);
app.use("/api/signup", signupController);
app.use("/api/auth", AuthController);

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.post("/api/sendEmail", (req, res) => {
  sendMail(req, res);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
