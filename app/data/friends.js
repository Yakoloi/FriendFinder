var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var userArray = [{
  "name": "Jon Snow",
  "photo": "http://i.imgur.com/6tgHWXP.jpg",
  "scores": [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1"
  ]
}, {
  "name": "Brienne of Tarth ",
  "photo": "https://i.imgur.com/wTYPRW6.jpg",
  "scores": [
    "3",
    "3",
    "3",
    "3",
    "3",
    "3",
    "3",
    "3",
    "3",
    "3"
  ]
}, {
  "name": "Daenerys Targaryen",
  "photo": "http://i.imgur.com/J1uwRtF.jpg",
  "scores": [
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5"
  ]
}, {
  "name": "Tormund",
  "photo": "http://i.imgur.com/FjINOx0.jpg",
  "scores": [
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4"
  ]
}];

module.exports = userArray;