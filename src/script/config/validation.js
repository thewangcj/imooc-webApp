'use strict';
angular.module('app').config(['$validationProvider', function ($validationProvider) {
  var expresssion = {
    phone: /^1[\d]{10}$/,
    password: function (value) {
      var str = value + '';
      return str.length > 5;
    },
    required: function (value) {
      return !!value; //!!等同于 value||false
    }
  };
  var defaultMsg = {
    phone: {
      success: '',
      error: '必须是11位手机号'
    },
    password: {
      success: '',
      error: '长度至少6位'
    },
    required: {
      success: '',
      error: '不能为空'
    }
  };
  $validationProvider.setExpression(expresssion).setDefaultMsg(defaultMsg);
}]);