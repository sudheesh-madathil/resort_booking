const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv/config");
const api = process.env.API_URL;

const loginrouter = require("./routers/signup");
const login = require("./routers/signin");
const reservation = require("./routers/reservation");
const hotel = require("./routers/hotel");
const search = require("./routers/search");

//midelwear

app.use(express.json());
app.use(morgan("tiny"));
app.use(`${api}/user/signup`, loginrouter);
app.use(`${api}/user/signin`, login);
app.use(`${api}/user/reservation`, reservation);
app.use(`${api}/admin/hotel`, hotel);
app.use(`${api}/user/search`, search);

// /////mongodb

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));

///server
app.listen(4000, () => {
  console.log(api);
  console.log(" server started");
});
