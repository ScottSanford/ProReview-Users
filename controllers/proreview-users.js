angular.module('proReviewApp')

	.controller('proReviewUsersCtrl', ['$scope', '$location', 'mfly', function($scope, $location, mfly){

		$scope.users = [
			{id: 0, name: "Executive", icon: "fa-briefcase"}, 
			{id: 1, name: "Marketing", icon: "fa-bullhorn"}, 
			{id: 2, name: "Post Production", icon: "fa-film"}, 
			{id: 3, name: "Vendors", icon: "fa-video-camera"} 
		];

		$scope.title = 'Mediafly: User Group Views';

		$scope.onDragComplete = function(index, data) {
			$location.url(index);
			console.log("Page Link :: " , $location.absUrl());
		}

		$scope.previousItem = function() {
			console.log('clicked previousItem');
			mfly.previousItem();
		}

		$scope.nextItem = function() {
			console.log('clicked nextItem');
			mfly.nextItem();
		}

	}]);