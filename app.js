var app = angular.module('authApp', []);

app.controller('AuthController', function($scope) {
    $scope.showLogin = true;
    $scope.loginData = {};
    $scope.registerData = {};

    $scope.toggleForm = function() {
        $scope.showLogin = !$scope.showLogin;
    };

    $scope.login = function() {
        
        console.log('Logging in...', $scope.loginData);
       
    };

    $scope.register = function() {
        
        console.log('Registering...', $scope.registerData);
        
    };
});
var mysql = require('mysql');
var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'java'
});

con.connect(function(error) {
    if (error) throw error;
    else console.log("connected to the database successfully!");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.post("/", encoder, function(req, res) {
    var username = req.body.user;
    var password = req.body.pass;

    con.query("SELECT * FROM login WHERE username = ? AND pass = ?", [username, password], function(error, results, fields) {
        if (error) throw error;
        
        if (results.length > 0) {
            res.redirect("/welcome");
        } else {
            res.redirect("/");
        }
    });
});


app.get("/welcome", function(req, res) {
    res.sendFile(__dirname + "/welcome.html");
});


app.listen(1100, function() {
    console.log('App listening on port 3306');
});