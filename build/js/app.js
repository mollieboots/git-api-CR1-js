(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "95450642bc2864a90d0c702b2e4ff4ac4d41a0dc";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $('#output').prepend("<div class='user_info'><img class='user_img' src='" + response.avatar_url + "'><h2 class='user_name'>" + response.login + "</h2><h4>" + response.location + "</h4><p><strong>Followers:</strong> " + response.followers + "</p><p><strong>Following:</strong> " + response.following + "</p><p><strong>Account Created:</strong> " + response.created_at + "</p><a class='repos' href='" + response.repos_url + "'>List of Public Repos");
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

// exports.getRepoList = function() {
//     $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
//       $('#user_info').append("");
// };

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
