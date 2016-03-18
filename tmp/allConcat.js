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
