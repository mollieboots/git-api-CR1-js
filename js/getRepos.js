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
