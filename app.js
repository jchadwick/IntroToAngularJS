angular.module('AngularDemo', [])

	.run(function($log, $rootScope) {

		$rootScope.filter = '';
		$rootScope.complete = true;

		$log.debug('Application initialized')
	})
