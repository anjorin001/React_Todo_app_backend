const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const mongodbConnect = require("./config/databaseConfig");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: "*" }));

const port = process.env.PORT;

const authRoute = require("./routes/auth.route");
const taskRoute = require("./routes/task.route");
const undefinedRoute = require("./middlewares/undefinedRoutes");

app.get("/", (req, res) => {
  res.send("API is working");
});
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/task", taskRoute);

app.use(undefinedRoute);

app.use(errorHandler);

app.listen(port, async () => {
  await mongodbConnect();
  console.log(`server running on ${port}`);
});
