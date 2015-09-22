'use strict';
$(document).ready(function() {

    Backbone.history.start();

    $('#menuScreen').hide();
    var showMenuScreen = function() {
        $('#loadingScreen').hide();
        $('#menuScreen').hide();
        $('#settingsScreen').show();
       	$('#leaderBoardScreen').show();
       	$('#gameScreen').show();
    }
    setTimeout(showMenuScreen, 4000);

    var Router = Backbone.Router.extend({
        routes: {
        	'menu': 'menuScreen',
            'settings': 'settingsScreen',
            'leaderBoard': 'leaderBoardScreen',
            'game': 'gameScreen'
        },
        menuScreen: function() {
        	$('#menuScreen').hide();
        	$('#settingsScreen').show();
        	$('#leaderBoardScreen').show();
        	$('#gameScreen').show();
        },
        settingsScreen: function() {
        	$('#menuScreen').show();
        	$('#settingsScreen').show();
            $('#leaderBoardScreen').hide();
            $('#gameScreen').hide();
        },
        leaderBoardScreen: function() {
        	$('#menuScreen').show();
            $('#settingsScreen').hide();
            $('#leaderBoardScreen').show();
            $('#gameScreen').hide();
        },
        gameScreen: function() {
        	$('#menuScreen').show();
            $('#settingsScreen').hide();
            $('#leaderBoardScreen').hide();
            $('#gameScreen').show();
        }

    });
    var game = new Router;
});
