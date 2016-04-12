var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/getRepos.js').getRepos;
var getUserData = require('./../js/getRepos.js').getUserData;

$(document).ready(function() {
  $('#search-profile').click(function() {
    var username = $('#username').val();
    $('#output-profile').empty();
    getUserData(username);
  });

  $('#search-repos').click(function() {
    var username = $('#username').val();
    $('#output-repos').empty();
    getRepos(username);
  });
});
