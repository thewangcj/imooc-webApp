'use strict';

angular.module('app').directive('appSheet',[function(){
  return{
    restrict: 'A',   // A代表属性
    replace: true,   // 代替父属性,要保证模板有根元素
    templateUrl: 'view/template/sheet.html',
    scope: {
      list: '=',
      visible : '=',
      select: '&'
    }
  }
}]);