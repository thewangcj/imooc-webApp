'use strict';   
// 构建时js文件已经合并为一个文件，所以可以直接引用angular
// 依赖模块ui-router
angular.module('app', ['ui.router', 'ngCookies','validation','ngAnimate']);
