'use strict';
// appHead HTML中不识别大小写属性，angular用-代表字母大写
angular.module('app').directive('appCompany', [function () {
  return {
    restrict: 'A', // A代表属性
    replace: true, // 代替父属性,要保证模板有根元素
    templateUrl: 'view/template/company.html',
    scope: {
      com: '='
    }
  }
}]);