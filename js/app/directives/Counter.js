function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ count }}</div>',
			'</div>'
		].join(''),
		controller: function ($scope) {
			$scope.count = 0;
		},
		compile: function($element, $attributes){
			return {
				post: function($scope, $element, $attributes){

						//var el = $element[0].querySelectorAll('div')[1];
						$element[0].addEventListener('click', function(){
							$scope.count +=1;
							$scope.$apply();
						});

						$scope.$on('$destroy', function(){
							el.off()
						});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);