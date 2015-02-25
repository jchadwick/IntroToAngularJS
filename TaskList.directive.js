angular.module('AngularDemo').directive('myTaskList', function() {
	
	return {
		restrict: 'EA',
		templateUrl: 'TaskList.html',
		controller: 'TaskListController',
	};
});