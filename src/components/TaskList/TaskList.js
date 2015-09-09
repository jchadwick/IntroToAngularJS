function TaskListController($scope, TasksService) {
	$scope.tasks = TasksService.getAll();
	$scope.delete = TasksService.delete;

	$scope.$on('tasksChanged', function () {
		$scope.tasks = TasksService.getAll();
	})

	$scope.$on('filterChanged', function (evt, args) {
		$scope.filter = args.filter;
	})
}

angular.module('TodoApp').controller('TaskListController', TaskListController);

angular.module('TodoApp').directive('taskList', function() {
	
	return {
		restrict: 'ACE',
		controller: 'TaskListController',
		templateUrl: 'components/TaskList/TaskList.html'
	};
	
});