angular.module("proReviewApp", [
        'ngRoute', 
        'ngAnimate', 
        'ngTouch',
        'ngDraggable'
        ])

        .config(function ($routeProvider, $compileProvider) { 
              $compileProvider.imgSrcSanitizationWhitelist(/^(mfly:\/\/data\/entry|http:\/\/)|https:\/\//); 
              $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|mfly):/);          
              $routeProvider
                .when('/', {
                    templateUrl: 'partials/proreview-users.html', 
                    controller: 'proReviewUsersCtrl'
                })
                .when('/:id', {
                    templateUrl: 'partials/secondpage.html',
                    controller: 'secondpageCtrl', 
                    resolve: {
                                proreview: function(ProReviewService){
                                    return ProReviewService.get();
                                }   
                             }
                })
                .otherwise({
                    redirectTo: '/'
                });
          })
        