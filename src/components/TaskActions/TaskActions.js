function TaskActionsController($rootScope, $scope, TasksService) {

	$scope.clearCompleted = TasksService.clearCompleted;

	$scope.$watch('filter', function () {
		$rootScope.$broadcast('filterChanged', { filter: $scope.filter });
	});
}

angular.module('TodoApp').controller('TaskActionsController', TaskActionsController);

angular.module('TodoApp').directive('taskActions', function() {
	
	return {
		restrict: 'ACE',
		controller: 'TaskActionsController',
		templateUrl: 'components/TaskActions/TaskActions.html'
	};
	
});