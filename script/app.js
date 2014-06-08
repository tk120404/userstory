(function(){

	var app = angular.module('scrumstory', []);

	app.controller('TemplateController',function($scope,$element){

		
			$scope.story = {};
			$scope.blockquoteHide=false;
			$scope.finalText = "";
			$scope.finalTextShow = false;
		
		
		$scope.isSelected = function(template)
		{
		   return $scope.template == template;
		};

		$scope.setTemplate = function(template)
		{
		 $scope.template = template;
		};

		$scope.storyReady = function()
		{
			 if($scope.story.role && $scope.story.goal && $scope.story.benefit)
				 {
				 	$scope.finalText = "As a " + $scope.story.role +", I want " + $scope.story.goal +", so that "+$scope.story.benefit;
				 	$scope.blockquoteHide = true;
				 	$scope.finalTextShow = true;				 	
				 }
		}

		$scope.reset = function()
		{
			$scope.story = {};
			$scope.blockquoteHide=false;
			$scope.finalText = "";
			$scope.finalTextShow = false;
		}

		$scope.isDisable = function()
		{
			return !( $scope.story.role && $scope.story.goal && $scope.story.benefit);
		}

		$scope.highlightMe = function($event)
		{
			$event.target.select();
		}
	});


app.directive('autoSelect', function($timeout,$parse){
  return {
      link: function(scope, element, attrs) {
      var model = $parse(attrs.autoSelect);
      console.log(model);
      scope.$watch(model, function(value) {
      	console.log(value);
        if(value === true) { 
            element[0].select();          
        }
      });     
    }
  };
});


})();