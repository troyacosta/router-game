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
        	$('#settingsScreen').show();
            $('#leaderBoardScreen').hide();
            $('#gameScreen').hide();
        },
        leaderBoardScreen: function() {
            $('#settingsScreen').hide();
            $('#leaderBoardScreen').show();
            $('#gameScreen').hide();
        },
        gameScreen: function() {
            $('#settingsScreen').hide();
            $('#leaderBoardScreen').hide();
            $('#gameScreen').show();
        }

    });
    var game = new Router;
});
