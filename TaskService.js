function TaskService($log, $q) {

	if(!localStorage.getItem('tasks')) {
		$log.info("initializing local storage...");
		localStorage.setItem('tasks', "[]");
	}

	function getAll() {
		var deferred = $q.defer();

		var tasks = JSON.parse(localStorage.getItem('tasks'));
		deferred.resolve(tasks);

		return deferred.promise;
	}

	function remove(task) {
		var tasks = JSON.parse(localStorage.getItem('tasks'));

		var existing = tasks.filter(function(t) { return t.id == task.id; });

		if(!existing.length)
			return;
		
		var index = tasks.indexOf(existing[0]);

		if(index >= 0)
			tasks.splice(index, 1);

		localStorage.setItem('tasks', JSON.stringify(tasks));

		return $q.all(true);
	}

	function save(task) {
		var tasks = JSON.parse(localStorage.getItem('tasks'));

		if(!task.id) {
			task.id = tasks.reduce(function(max, t) { return max > t.id ? max : t.id; }, 0) + 1;
			tasks.push(task);
		} else {
			var existing = tasks.filter(function(t) { return t.id == task.id; });
			if(existing.length){
				angular.copy(task, existing[0]);
			}
		}

		localStorage.setItem('tasks', JSON.stringify(tasks));
		$log.debug('SAVE: ', task.id);

		return $q.all(true);
	}

	return {
		getAll: getAll,
		remove: remove,
		save: save,
	}
}

angular.module('AngularDemo').service('TaskService', TaskService);