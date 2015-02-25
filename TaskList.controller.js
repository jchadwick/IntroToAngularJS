angular.module('AngularDemo').controller('TaskListController', 

function TaskListController($log, $scope, TaskService) {

	$scope.tasks = [];

	TaskService.getAll().then(function(tasks) { 
		angular.copy(tasks, $scope.tasks);
	});

	function addTask(name) {
		var task = { name: name };
		$scope.tasks.push(task);
		TaskService.save(task);
	}

	function removeTask(task) {
		var index = $scope.tasks.indexOf(task);

		if(index >= 0)
			$scope.tasks.splice(index, 1);

		TaskService.remove(task);
	}

	function clearCompleted() {
		for(var i = 0; i < $scope.tasks.length; i++) {
			var task = $scope.tasks[i];
			if(task.complete)	
				$scope.removeTask(task);
		}
	}

	$scope.addTask = addTask;
	$scope.removeTask = removeTask;
	$scope.clearCompleted = clearCompleted;
});