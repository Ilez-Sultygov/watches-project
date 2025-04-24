const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const removeHTTPHeader = require("../middleware/removeHeader");

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cookieParser());
  app.use(removeHTTPHeader);

  app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

  // app.use(
  //   "/static/images",
  //   express.static(path.resolve(__dirname, "..", "public", "images"))
  // );

};

module.exports = serverConfig;
