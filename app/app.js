var myApp = angular.module('myApp', []);

myApp.config(function () {

});

myApp.run(function () {

});

myApp.controller('AppController', ['$scope', function ($scope) {
  $scope.flowmies = [
    {
      name : 'Chris',
      prop : 'Staff',
      money : 10,
      available : true
    },
    {
      name : 'Montana',
      prop : 'Hoop',
      money : 20,
      available : false
    },
    {
      name : 'Sam',
      prop : 'Poi',
      money : 5,
      available : true
    }
  ];
}]);
