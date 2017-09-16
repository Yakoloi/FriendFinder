var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var userData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(userData)
    });

    app.post("/api/friends", function (req, res) {
        userData.unshift(req.body);
        console.log("results" + res)
        var lowestTally = 50;
        for (var i = 1; i < userData.length; i++) {
            var tally = 0;
            var c = i;
            var match;
            for (var x = 0; x < 10; x++) {
                var rawDiff = userData[0]["scores"][x] - userData[c]["scores"][x];
                var diff = Math.abs(rawDiff);
                tally += diff;
            }
            if (tally < lowestTally) {
                lowestTally = tally;
                match = userData[i];
            };
            if (i == userData.length - 1) {
                console.log(match);
                console.log("lowest tally " + lowestTally);
                console.log("current match " + match["name"]);
                res.json(match);
            }
        }

    });

};