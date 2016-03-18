(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "f3e6a48c80583843f72aecc17212d22a01af5031";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  var username = $('#ghUsername').val();
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(repos){
    console.log(repos);
    $('div.user-repos').append('<h2>Repositories</h2>');
    for(var i = 0; i < repos.length ; i++) {
      $('div.user-repos').append("<a href='https://github.com/" + username + "/" + repos[i].name + "'>" + repos[i].name + "</a><p>" + repos[i].description + "</p>");
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

// + moment(repos[i].created_at).format('L') + "</td></tr>"

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;


exports.getUserInfo = function() {
  var username = $('#ghUsername').val();
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    console.log(response);
// debugger;
    $('div.user-info').append('<h1>' + response.login + '</h1>');
    if (response.name != null) {
      $('div.user-info').append('<h4>' + response.name + '</h4>');
    };
    if (response.company != null) {
      $('div.user-info').append('<p>' + response.company + '</p>');
    };
    if (response.location != null) {
      $('div.user-info').append('<p>' + response.location + '</p>');
    };

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
}

},{"./../.env":1}],4:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var getRepos = require('../js/get-repositories.js').getRepos;
var getUserInfo = require('../js/get-user-info.js').getUserInfo;

$(document).ready(function() {
  $('form#generateUser').submit(function(event) {
    event.preventDefault();
    var username = $('#ghUsername').val();
    getUserInfo();
    getRepos();

  });

});





















// $(document).ready(function() {
//   $('form#generateUser').submit(function(event) {
//     event.preventDefault();
//     var username = $('#ghUsername').val();
//     $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
//       console.log(response);
//       $('div.user-info').html('<h1>' + username + '</h1><h4>' + response.name + '</h4><p>' + response.company + '</p><p>' + response.location);
//       $('div.user-repos').html('<h4>' + response.repos_url + '</h4>');
//     }).fail(function(error) {
//       console.log(error.responseJSON.message);
//     });
//   });
//
// });

},{"../js/get-repositories.js":2,"../js/get-user-info.js":3,"./../.env":1}]},{},[4]);
