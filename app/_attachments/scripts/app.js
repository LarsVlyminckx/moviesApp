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
	
	.controller('homeCtrl', function($scope, $http, moviesSrv) {
		
	    	$('#searchButton').on('click', function (e) {

	    		$scope.movies = tmpStr[0].filmography.actor;
	    		$scope.color = '';
	    		$http.get("http://theimdbapi.org/api/find/person?name=steve+mcqueen"  + '&format=json')
	    		  .then(function(response) {
	    		      var tmpStr = response.data;
	  
	    		      return $scope.movies = tmpStr[0].filmography.actor;
	    		  });
	    		$scope.movies = moviesSrv.getMovies();
	    	});
    })
    .service('moviesSrv', function($http, $q) {
    		this.getMovies = function() {
    			$scope.color = '';
	    		$http.get("http://theimdbapi.org/api/find/person?name=steve+mcqueen"  + '&format=json')
	    		  .then(function(response) {
	    		      var tmpStr = response.data;
	  
	    		      return $scope.movies = tmpStr[0].filmography.actor;
	    		  });
	    		};
    });