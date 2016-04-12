var apiKey = require('./../.env').apiKey;

exports.getUserData = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $('#output-profile').prepend("<div class='user_info'><img class='user_img' src='" + response.avatar_url + "'><h2 class='user_name'>" + response.login + "</h2><h4>" + response.location + "</h4><p><strong>Followers:</strong> " + response.followers + "</p><p><strong>Following:</strong> " + response.following + "</p><p><strong>Account Created:</strong> " + response.created_at + "</p>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++) {
      $('#output-repos').append('<li>Name: ' + response[i].name + '</li>');
      $('#output-repos').append('<li>Link: <a href="' + response[i].html_url + '">' + response[i].html_url + '</li><br>');
    }
  });
};
