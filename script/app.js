(function() {
    var app = angular.module('scrumstory', ['ui.bootstrap', 'ui.router']);
    app.config(function($stateProvider, $urlRouterProvider) {
        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/template1")
        $stateProvider.state('template1', {
            url: "/template1",
            templateUrl: "views/template1.html",
            controller: function($scope) {
                $scope.story = {};
                $scope.blockquoteHide = false;
                $scope.finalText = "";
                $scope.finalTextShow = false;
                $scope.roles = ['user', 'developer', 'end-user', 'admin', 'teacher', 'engineer', 'artist', 'PO', 'manager', 'doctor', 'vendor', 'scientist'];
                $scope.storyReady = function() {
                    console.log($scope.blockquoteHide, $scope.finalTextShow);
                    if ($scope.story.role && $scope.story.goal && $scope.story.benefit) {
                        $scope.finalText = "As a " + $scope.story.role + ", I want " + $scope.story.goal + ", so that " + $scope.story.benefit;
                        $scope.blockquoteHide = true;
                        $scope.finalTextShow = true;
                    }
                    console.log($scope.blockquoteHide, $scope.finalTextShow);
                }
                $scope.reset = function() {
                    $scope.story = {};
                    $scope.blockquoteHide = false;
                    $scope.finalText = "";
                    $scope.finalTextShow = false;
                }
                $scope.isDisable = function() {
                    return !($scope.story.role && $scope.story.goal && $scope.story.benefit);
                }
                $scope.highlightMe = function($event) {
                    $event.target.select();
                }
            }
        })
    });
    app.directive('autoSelect', function($parse) {
        return {
            link: function(scope, element, attrs) {
                var model = $parse(attrs.autoSelect);
                scope.$watch(model, function(value) {
                    if (value === true) {
                    	console.log(value);
                        element[0].select();
                    }
                });
            }
        };
    });
})();