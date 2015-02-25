angular.module('AngularDemo').controller('TaskController', 

function TaskController($log, $scope, TaskService) {

	function toggleComplete() {
		$scope.task.complete = !$scope.task.complete;
		TaskService.save($scope.task);
	}

	$scope.toggleComplete = toggleComplete;
});