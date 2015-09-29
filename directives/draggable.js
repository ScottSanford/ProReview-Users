angular.module('proReviewApp')

.directive('draggable', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			element.draggable({
				cursor: "move",
				stop: function (event, ui) {
                    scope[attrs.ypos] = ui.position.top;
                    scope.$apply();
				}
			});
		}
	};
});