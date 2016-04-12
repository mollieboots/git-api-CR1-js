var apiKey = require('./../.env').apiKey;

exports.getUserData = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $('#output').prepend("<div class='user_info'><img class='user_img' src='" + response.avatar_url + "'><h2 class='user_name'>" + response.login + "</h2><h4>" + response.location + "</h4><p><strong>Followers:</strong> " + response.followers + "</p><p><strong>Following:</strong> " + response.following + "</p><p><strong>Account Created:</strong> " + response.created_at + "</p><button class='btn getRepos' type='button'>Get User Repos</button>");
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.getRepos = function(username){
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
        console.log(response);
        for(var i = 0; i < response.length; i++) {
            $('#repoList').append('<li>Name: ' + response[i].name + '</li>');
            $('#repoList').append('<li>Link: <a href="' + response[i].html_url + '">' + response[i].html_url + '</li><br>');
        }
    });
};
