var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/getRepos.js').getRepos;
var getUserData = require('./../js/getRepos.js').getUserData;

$(document).ready(function() {
  $('#search-profile').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    getUserData(username);
  });

  $('#search-repos').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    console.log(username);
    getRepos(username);
  });
});
