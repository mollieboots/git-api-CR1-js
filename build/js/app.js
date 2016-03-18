(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "f49fd7cbd8bd168701b767f68cb0c4af4e691d90";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $('#output').append("<div class='user_info'><img class='user_img' src='" + response.avatar_url + "'><h2 class='user_name'>" + response.login + "</h2><h4>" + response.location + "</h4><a href='" + response.followers_url + "'>Followers: " + response.followers + "</a><br><a href='" + response.following_url + "'>Following: " + response.following + "</a><p>Account Created: " + response.created_at + "</p><a class='repos' href='" + response.repos_url + "'>List of Public Repos");
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/getRepos.js').getRepos;

$(document).ready(function() {
  $('#search').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    console.log(username);
    getRepos(username);
  });
});

},{"./../.env":1,"./../js/getRepos.js":2}]},{},[3]);
