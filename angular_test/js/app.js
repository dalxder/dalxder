(function(){
	"use strict";
	var App=angular.module('Prueba',[
		// dependence here
		])
	.controller('MainController',function($scope) {
		$scope.your_name='you are the user';
		$scope.categories=['SIG','Ejercicios','Aplicaciones'];
		$scope.bookmarks=[
		{id:1,name:'youtube.com',url:'https://youtube.com', category: 'SIG'},
		{id:2,name:'github.com',url:'https://github.com', category: 'Aplicaciones'},
		{id:3,name:'pags/ejercicio_1.html',url:'pags/ejercicio_1.html', category: 'Aplicaciones'}
		];
		$scope.currentCategory='SIG';
		$scope.setCurrentCategory=function(category){
			$scope.currentCategory=category;
		}
		$scope.isCurrentCategory=function(category){
			return $scope.currentCategory==category;
		}
		// body...
	});
	console.log(App);


})();
