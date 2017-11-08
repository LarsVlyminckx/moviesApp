'use strict'

angular.module('parkingApp', ['ngRoute'])

	.config(function($routeProvider) {
	    $routeProvider
	        .when('/home', {
	            templateUrl: 'assets/views/home.html',
	            controller: 'homeCtrl'
	        })
	        .otherwise({
                redirectTo: '/home'
            });
	})
	
	.controller('homeCtrl', function($scope, $http) {
		
	    	$('#searchButton').on('click', function (e) {

	    		$scope.color = '';
	    		$http.get("http://theimdbapi.org/api/find/person?name=steve+mcqueen"  + '&format=json')
	    		  .then(function(response) {
	    		      var tmpStr = response.data;
	  
	    		      $scope.movies = tmpStr[0].filmography.actor;
	    		  });
	    	});
    })
    
    ;