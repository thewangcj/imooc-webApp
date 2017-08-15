'use strict';
angular.module('app').directive('appPositionClass',[function(){
  return{
    restrict:'A',   // A代表属性
    replace:true,   // 代替父属性
    templateUrl:'view/template/positionClass.html',
    scope:{
      com:'='
    },
    link: function($scope){
      $scope.showPositionList = function(idx){
        $scope.positionList = $scope.com.positionClass[idx].positionList;
        $scope.isActive = idx;
      }
      $scope.$watch('com',function(newVal){
        if(newVal){
          $scope.showPositionList(0);
        }
      })
    }
  };
}]);