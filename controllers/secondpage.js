angular.module('proReviewApp')

	.controller('secondpageCtrl', ['$scope', '$routeParams', '$location', '$timeout','proreview', 'mfly', function($scope, $routeParams, $location, $timeout, proreview, mfly){

		$scope.users = [
			{id: 0, name: "Executive", icon: "fa-briefcase"}, 
			{id: 1, name: "Marketing", icon: "fa-bullhorn"}, 
			{id: 2, name: "Post Production", icon: "fa-film"}, 
			{id: 3, name: "Vendors", icon: "fa-video-camera"} 
		];

		$scope.tab = 1;

		for (var i = 0; i < proreview.length; i++) {
			if ($routeParams.id === proreview[i].id) {
				$scope.icon         = proreview[i].icon;
				$scope.userGroup    = proreview[i].title;
				$scope.description  = proreview[i].description;
				$scope.challenge    = proreview[i].challenge;
		        $scope.resolution   = proreview[i].resolution;
		        $scope.prviews      = proreview[i].prviews;		
		        $scope.resources    = proreview[i].resources;		
			}
		}

        $scope.goBackToIndex= function(){
        	$location.url('/');
    	}
 
	   	$scope.setTab = function(tabId) {
	   		$scope.tab = tabId;
	   	}

	   	$scope.isSet = function(tabId) {
	   		return	$scope.tab === tabId;
	   	}

	   	$scope.radioModel = 'Challenge';

	   	$scope.setActiveButton=function(tab){
		    if(tab!==$scope.tab){
		      $scope.activeBtn=''
		      $timeout(function(){
		        $scope.activeBtn=tab;  
		      },500)
		    }
		}

		$scope.previousItem = function() {
			mfly.previousItem();
		}

		$scope.nextItem = function() {
			mfly.nextItem();
		}

		// Uses document because document will be topmost level in bubbling
	    $(document).on('touchmove',function(e){
	      e.preventDefault();
	    });

	    var scrolling = false;

		$('body').on('touchstart','.image-container',function(e) {

          // Only execute the below code once at a time
          if (!scrolling) {
              scrolling = true;   
              if (e.currentTarget.scrollTop === 0) {
                e.currentTarget.scrollTop = 1;
              } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
                e.currentTarget.scrollTop -= 1;
              }
              scrolling = false;
          }
      	});

	      // Prevents preventDefault from being called on document if it sees a scrollable div
	      $('body').on('touchmove','.image-container',function(e) {
	        if($(this)[0].scrollHeight > $(this).innerHeight()) {
	              e.stopPropagation();
	          }
	      });

	}]);