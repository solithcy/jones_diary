require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const api = require("./router/api");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", api);

const port = process.env.PORT || 3000;

app.listen(port);
