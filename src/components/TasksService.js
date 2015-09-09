function TasksService($rootScope) {

	var tasks = [
		{ name: 'Incomplete task' },
		{ name: 'Second task' }
	];

	function add(task) {
		tasks.push(task);
		_triggerChange();
	}

	function clearCompleted() {

		var completed = tasks.filter(function (task) {
			return task.completed;
		});

		for (var i = 0; i < completed.length; i++) {
            var task = completed[i];
            tasks.splice(tasks.indexOf(task), 1);
		}

		_triggerChange();
	}

	function deleteTask(task) {
		tasks.splice(tasks.indexOf(task), 1);
		_triggerChange();
	}

	function getAll() {
		return tasks;
	}

	function _triggerChange() {
		$rootScope.$broadcast('tasksChanged');
	}

	return {
		add: add,
		'delete': deleteTask,
		clearCompleted: clearCompleted,
		getAll: getAll
	}
}

angular.module('TodoApp').service('TasksService', TasksService)