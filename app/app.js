var myApp = angular.module('myApp', []);

myApp.config(function () {

});

myApp.run(function () {

});

myApp.controller('AppController', ['$scope', function ($scope) {

  $scope.addFlowmie = function (flowmie) {
    flowmie.available = true;
    $scope.flowmies.push(flowmie)

    $scope.newFlowmie = {};
  }

  $scope.removeFlowmie = function (flowmie) {
    var removedFlowmie = $scope.flowmies.indexOf(flowmie);

    $scope.flomies.splice(removedFlowmie, 1);
  }

  $scope.flowmies = [
    {
      name : 'Chris',
      prop : 'Staff',
      money : 10,
      available : true,
      belt : 'green'
    },
    {
      name : 'Montana',
      prop : 'Hoop',
      money : 20,
      available : true,
      belt : 'red'
    },
    {
      name : 'Sam',
      prop : 'Poi',
      money : 5,
      available : true,
      belt : 'blue'
    }
  ];

}]);
