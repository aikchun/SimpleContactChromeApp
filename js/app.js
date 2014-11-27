var contactApp = angular.module('contactApp', ['ngResource']);

contactApp.controller('tabsController', function($scope) {
	$scope.selected = 'View';
	$scope.tabs = [
		'Add',
		'View'
	];
});
contactApp.controller('friendsController', function($scope, $http) {

	$scope.contacts = {};
	//var getUsersList = function() {
	//	// This service's function returns a promise, but we'll deal with that shortly
	//	usersService.getUsers()
	//	    // then() called when son gets back
	//	    .then(function(data) {
	//		// promise fulfilled
	//		$scope.contacts.friends = data.users;
	//	    }, function(error) {
	//		// promise rejected, could log the error with: console.log('error', error);
	//		console.log('data', data);
	//	    });
	//};
	$http.get('http://192.168.33.20:8765/users.json')
		.success(function(data){
			$scope.contacts.friends = data.users;
		});

	$scope.addContact = function() {
		$scope.contacts.friends.push(
				{name: $scope.contacts.newname, email: $scope.contacts.newemail}
		);

	 };
});

//contactApp.factory('usersService', function($http, $q){
//	return {
//		getUsers: function() {
//		    // the $http API is based on the deferred/promise APIs exposed by the $q service
//		    // so it returns a promise for us by default
//		    return $http.get('http://192.168.33.20:8765/users.json')
//			.then(function(response) {
//			    if (typeof response.data === 'object') {
//				return response.data;
//			    } else {
//				// invalid response
//				return $q.reject(response.data);
//			    }
//
//			}, function(response) {
//			    // something went wrong
//			    return $q.reject(response.data);
//			});
//		}
//	};
//});

contactApp.factory('usersService', function($resource){
	return $resource("/api/contacts/:id", { id: "@_id" },
	    {
	      'create':  { method: 'POST' },
	      'index':   { method: 'GET', isArray: true },
	      'show':    { method: 'GET', isArray: false },
	      'update':  { method: 'PUT' },
	      'destroy': { method: 'DELETE' }
	    }
	);
});


