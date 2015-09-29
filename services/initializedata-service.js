angular.module('proReviewApp')


.factory('ProReviewService',function ($http , $q) {

    var self = {};
    self.get = function() {
        var deferred = $q.defer();
        $http.get('data/proreview-data.json').success(function (data) {
            self.data = data;
            console.log(data);
            deferred.resolve(data);
        }).error(function(error){
            console.log("Error :: " , error);
        });
        
        return deferred.promise; 
    }
    return self;
});
