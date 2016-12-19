var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'AppController'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'AppController'
    })
    .otherwise({
      redirectTo: '/home'
    });

    $locationProvider.html5Mode(true);
}]);

myApp.run(function () {

});

myApp.directive('randomFlowmie', [function () {
  return {
    restrict: 'E',
    scope: {
      flowmies: '=',
      title: '='
    },
    templateUrl: 'views/random.html',
    transclude: true,
    replace: true,
    controller: function ($scope) {
      $scope.random = Math.floor(Math.random() * 3);
    }
  };
}]);

myApp.controller('AppController', ['$scope' , '$http', function ($scope, $http) {

  $scope.addFlowmie = function (flowmie) {
    flowmie.available = true;
    $scope.flowmies.push(flowmie)

    $scope.newFlowmie = {};
  }

  $scope.removeFlowmie = function (flowmie) {
    var removedFlowmie = $scope.flowmies.indexOf(flowmie);

    $scope.flomies.splice(removedFlowmie, 1);
  }

  $http.get('data/flowmies.json').then(function (response) {
    $scope.flowmies = response.data;
  });

}]);
