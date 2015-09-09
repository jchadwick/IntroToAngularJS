function AddTaskController($scope, TasksService) {
	$scope.newTask = {};
	$scope.addTask = function () {
		TasksService.add($scope.newTask);
		$scope.newTask = {};
	}
}

angular.module('TodoApp').controller('AddTaskController', AddTaskController);

angular.module('TodoApp').directive('addTask', function() {
	
	return {
		restrict: 'ACE',
		controller: 'AddTaskController',
		templateUrl: 'components/AddTask/AddTask.html'
	};
	
});