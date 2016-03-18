(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "f49fd7cbd8bd168701b767f68cb0c4af4e691d90";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function getRepos(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

$(document).ready(function() {
  $('#search').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    console.log(username);
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
      $('#output').append("<div class='user_info'><img class='user_img' src='" + response.avatar_url + "'><h2 class='user_name'>" + response.login + "</h2><h4>" + response.location + "</h4><p>Followers: " + response.followers + "</p><p>Following: " + response.following + "</p><p>Account Created: " + response.created_at + "</p>");

      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});

},{"./../.env":1}]},{},[2]);
