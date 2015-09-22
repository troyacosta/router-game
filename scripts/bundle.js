(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {

    Backbone.history.start();

    $('#menuScreen').hide();
    var showMenuScreen = function showMenuScreen() {
        $('#loadingScreen').hide();
        $('#menuScreen').hide();
        $('#settingsScreen').show();
        $('#leaderBoardScreen').show();
        $('#gameScreen').show();
    };
    setTimeout(showMenuScreen, 4000);

    var Router = Backbone.Router.extend({
        routes: {
            'menu': 'menuScreen',
            'settings': 'settingsScreen',
            'leaderBoard': 'leaderBoardScreen',
            'game': 'gameScreen'
        },
        menuScreen: function menuScreen() {
            $('#menuScreen').hide();
            $('#settingsScreen').show();
            $('#leaderBoardScreen').show();
            $('#gameScreen').show();
        },
        settingsScreen: function settingsScreen() {
            $('#menuScreen').show();
            $('#settingsScreen').show();
            $('#leaderBoardScreen').hide();
            $('#gameScreen').hide();
        },
        leaderBoardScreen: function leaderBoardScreen() {
            $('#menuScreen').show();
            $('#settingsScreen').hide();
            $('#leaderBoardScreen').show();
            $('#gameScreen').hide();
        },
        gameScreen: function gameScreen() {
            $('#menuScreen').show();
            $('#settingsScreen').hide();
            $('#leaderBoardScreen').hide();
            $('#gameScreen').show();
        }

    });
    var game = new Router();
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map