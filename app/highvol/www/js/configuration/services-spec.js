define(['angular', 'config-services'], function(angular) {
	describe("the injections of this test", function(){
		it('angular should not be null', function() {
			expect(angular).toBeDefined();
		});
		it('configuration.services should not be null', function() {
			var module = angular.module('configuration.services');
			expect(module).toBeDefined();
		});

	});
	// describe('PasswordController', function() {
	// 	console.log(angular);
	// 	beforeEach(angular.module('configuration.services'));

	// 	var $service;

	// 	beforeEach(inject(function(_$service_) {
	// 		// The injector unwraps the underscores (_) from around the parameter names when matching
	// 		$service = _$service_;
	// 	}));

	// 	describe('$scope.grade', function() {
	// 		it('sets the strength to "strong" if the password length is >8 chars', function() {
	// 			var $scope = {};
	// 			var controller = $controller('PasswordController', {
	// 				$scope: $scope
	// 			});
	// 			$scope.password = 'longerthaneightchars';
	// 			$scope.grade();
	// 			expect($scope.strength).toEqual('strong');
	// 		});
	// 	});
	// });
});