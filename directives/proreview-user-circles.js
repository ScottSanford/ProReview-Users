angular.module('proReviewApp')

	.directive('proreviewUsers', function(){
		return {
			retrict: 'E', 
			templateUrl: 'directives/proreview-user-circles.html'
		}
	})