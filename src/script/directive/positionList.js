'use strict';
angular.module('app').directive('appPositionList',['$http','cache',function($http,cache){
  return{
    restrict: 'A',
    replace: true,
    templateUrl: '/view/template/positionList.html',
    scope: {
      data: '=',
      filterObj: '='
    },
    link:function($scope){
      $scope.name = cache.get('name') || '';
      $scope.select =function(item){
        $http.post('data/favorite.json',{id:item.id,select:!item.select}).then(function(){
          item.select = !item.select;
        });
      }
    }
  }
}]);
