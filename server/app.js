require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const api = require("./router/api");
const app = express();

app.use(express.json());
app.use(cookieParser());
const whitelist = ['http://localhost:3000', 'http://localhost:5173']
app.use(cors({
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}));
app.use("/api", api);

const port = process.env.PORT || 3000;

app.listen(port);
