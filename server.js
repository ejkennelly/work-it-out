const mongoose = require("mongoose");
const express = require("express");
const PORT = process.env.PORT || 3000;
const db = require("./models");

const app = express();