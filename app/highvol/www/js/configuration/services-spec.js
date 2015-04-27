define(['angular'], function(angular) {
	describe("angular should be injected", function(){
		it('should not be null', function() {
			expect(angular).toBeDefined();
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