angular.module('loginapp', []).
    config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'login.ngt',
            controller: 'LoginCtrl'
        }).
        otherwise({
            redirectTo: '/'
    });
});