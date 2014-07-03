(function() {
    var app = angular.module('scrumstory', ['ui.bootstrap', 'ui.router']);
    app.run(
        ['$rootScope', '$state',
            function($rootScope, $state) {
                $rootScope.isTemplateSelected = function(template) {
                    return $state.includes(template);
                }

            }
        ]);

    app.factory('Roles',function()
    {
        var Roles = {};
        Roles.roles = ['user', 'developer', 'end-user', 'admin', 'teacher',
                 'engineer', 'artist', 'PO', 'manager', 'doctor', 'vendor', 'scientist',
                 'contractor','client','customer','geek','hacker','CEO','cashier','journalist'];
        return Roles;
    });
    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/template1")
        $stateProvider.state('template1', {
            url: "/template1",
            templateUrl: "views/template1.html",
            controller: function($scope,Roles) {
                $scope.story = {};
                $scope.blockquoteHide = false;
                $scope.finalText = "";
                $scope.finalTextShow = false;
                $scope.roles = Roles.roles;

                $scope.storyReady = function() {
                    if ($scope.story.role && $scope.story.goal && $scope.story.benefit) {
                        $scope.finalText = "As a " + $scope.story.role + ", I want " + $scope.story.goal + ", so that " + $scope.story.benefit;
                        $scope.blockquoteHide = true;
                        $scope.finalTextShow = true;
                    }
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
        }).state('template2', {
            url: "/template2",
            templateUrl: "views/template2.html",
            controller: function($scope,Roles) {
                $scope.story = {};
                $scope.blockquoteHide = false;
                $scope.finalText = "";
                $scope.finalTextShow = false;
                $scope.roles = Roles;

              	$scope.storyReady = function() {
                    if ($scope.story.role && $scope.story.goal) {
                        $scope.finalText = "As a " + $scope.story.role + ", I want " + $scope.story.goal;
                        $scope.blockquoteHide = true;
                        $scope.finalTextShow = true;
                    }
                }
                $scope.reset = function() {
                    $scope.story = {};
                    $scope.blockquoteHide = false;
                    $scope.finalText = "";
                    $scope.finalTextShow = false;
                }
                $scope.isDisable = function() {
                    return !($scope.story.role && $scope.story.goal);
                }
                $scope.highlightMe = function($event) {
                    $event.target.select();
                }
            }
        }).state('template3', {
            url: "/template3",
            templateUrl: "views/template3.html",
            controller: function($scope,Roles) {
                $scope.story = {};
                $scope.blockquoteHide = false;
                $scope.finalText = "";
                $scope.finalTextShow = false;
                $scope.roles = Roles;

                $scope.storyReady = function() {
                    if ($scope.story.role && $scope.story.goal && $scope.story.benefit) {
                        $scope.finalText = "In order to " + $scope.story.benefit + " as a " + $scope.story.role + ", I want " + $scope.story.goal;
                        $scope.blockquoteHide = true;
                        $scope.finalTextShow = true;
                    }
                }
                $scope.reset = function() {
                    $scope.story = {};
                    $scope.blockquoteHide = false;
                    $scope.finalText = "";
                    $scope.finalTextShow = false;
                }
                $scope.isDisable = function() {
                    return !($scope.story.benefit && $scope.story.role && $scope.story.goal);
                }
                $scope.highlightMe = function($event) {
                    $event.target.select();
                }
            }
        }).state('template4', {
            url: "/template4",
            templateUrl: "views/template4.html",
            controller: function($scope,Roles) {
                $scope.story = {};
                $scope.blockquoteHide = false;
                $scope.finalText = "";
                $scope.finalTextShow = false;
                $scope.roles = Roles;

                $scope.storyReady = function() {
                    if ($scope.story.role && $scope.story.when && $scope.story.where && $scope.story.what && $scope.story.why ) {
                        $scope.finalText = "As " + $scope.story.role +" " +$scope.story.when +" " + $scope.story.where + ", I " + $scope.story.what + " because " + $scope.story.why;
                        $scope.blockquoteHide = true;
                        $scope.finalTextShow = true;
                    }
                }
                $scope.reset = function() {
                    $scope.story = {};
                    $scope.blockquoteHide = false;
                    $scope.finalText = "";
                    $scope.finalTextShow = false;
                }
                $scope.isDisable = function() {
                    return !($scope.story.role && $scope.story.when && $scope.story.where && $scope.story.what && $scope.story.why);
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
                        element[0].select();
                    }
                });
            }
        };
    });
})();