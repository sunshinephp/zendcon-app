/* global define */
define(['angular', 'app'], function(angular, app) {
    'use strict';

    return app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/speakers', {
            templateUrl: 'views/speakers.html',
            controller: 'SpeakerCtrl'
        });

        $routeProvider.when('/sessions', {
            templateUrl: 'views/sessions.html',
            controller: 'SessionCtrl'
        });

        $routeProvider.when('/schedule', {
            templateUrl: 'views/schedule.html',
            controller: 'ScheduleCtrl'
        });

        $routeProvider.when('/schedule/:date', {
            templateUrl: 'views/schedule.html',
            controller: 'ScheduleCtrl'
        });

        $routeProvider.otherwise({redirectTo: '/speakers'});
    }]);
});