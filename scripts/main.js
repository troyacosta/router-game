'use strict';
$(document).ready(function() {

    Backbone.history.start();
    $('#menuScreen').hide();
    var showMenuScreen = function() {
        $('#loadingScreen').hide();
        $('#menuScreen').show();
    }
    setTimeout(showMenuScreen, 4000);

    var Router = Backbone.Router.extend({
        routes: {
            'settings': 'settingsScreen',
            'leaderBoard': 'leaderBoardScreen',
            'game': 'gameScreen'
        },
        settingsScreen: function() {
            $('section').hide();
            $('#settingsScreen').show();
        },
        leaderBoardScreen: function() {
            $('section').hide();
            $('#leaderBoardScreen').show();
        },
        gameScreen: function() {
            $('section').hide();
            $('#gameScreen').show();
        }

    });

    var game = new Router();

});
