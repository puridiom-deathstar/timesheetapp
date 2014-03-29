var loginapp = angular.module('loginapp', ['angular-route']);
loginapp.controller('LoginCtrl'); 
//
// THIS IS THE CONTROLLER FOR THE APP
//

function LoginCtrl($scope) {
 
    // model to hold the credentials
    $scope.user = {};
 
 
    /**
     * update the UI with the response
     */
    function updateStatus(_message) {
         $scope.user.authenticated = _message;
    };
 
    /**
     * called from UI when the login button is clicked
     */
    $scope.loginClicked = function () {
	updateStatus('Authenticated');
    }
}