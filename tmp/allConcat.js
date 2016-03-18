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