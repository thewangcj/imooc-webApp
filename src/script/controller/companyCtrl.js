'use strict';
angular.module('app').controller('companyCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
  $http.get('/data/company.json?id=' + $state.params.id).then(function (res) {
    //console.log(res.data);
    $scope.company = res.data;
    //$scope.$broadcast('abc',{id:1});

  }, function (res) {
    console.log(res.data);
  });
  // $scope.$on('cba',function(event,data){
  //   console.log(event,data)
  // })
}]);