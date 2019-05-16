(function (){
'use strict';
angular.module("Usman'sApp",[])
.controller("usmanscontroller", usmanscontroller)
.filter('loves',LovesFilter);
usmanscontroller.$inject = ['$scope', 'lovesFilter'];

function  usmanscontroller($scope,lovesFilter){
	//$scope.name = "";
	// $scope.sayMessage = function(){
	// 		var msg = "i am usman";
	// 		var output = $filter('uppercase')(msg);
	// 		return output;
	// 		};
	
		$scope.saylovesMessage = function(){
			var msg = "i am usman";
			msg = lovesFilter(msg);
			return msg;
			};
	
}
	function LovesFilter(){
		return function(input){ 
				input = input || "";
				input = input.replace("usman","umair");
				return input;
		};
	}
})();

// function calculatestring(string){
// 	var totalStringValue =0;
// 	for(var i=0; i<sring.length;i++){

// 		totalStringValue += string.charCodeAt(i);

// 	}
// 	return totalStringValue;
// }


// function makeMultiplier(multiplier){
// 	var multiply = function(x){
// 		return x * multiplier;
// 	}
// 	return multiply;
// };
// var multiplyby3 = makeMultiplier(3);
// function operation(x,operationOn){
// 	return (operationOn(x));
// };
// var result = operation(5,multiplyby3);
// function test(radius){
// this.radius = radius;
// this.age = 18;
// }
// test.prototype.getarea = function() {
// 	console.log(Math.PI * Math.pow(this.radius,2));
// };
// var myTest = new test(2);
// console.log(myTest.getarea());
// var othertest = new test(5);
// console.log(othertest.getarea());
// (function () {
// 'use strict';

// angular.module('MsgApp', [])
// .controller('MsgController', MsgController)
// .filter('loves', LovesFilter)
// .filter('truth', TruthFilter);

// MsgController.$inject = ['$scope', 'lovesFilter'];
// function MsgController($scope, lovesFilter) {
//   $scope.stateOfBeing = "hungry";

//   $scope.sayMessage = function () {
//     var msg = "Yaakov likes to eat healthy snacks at night!";
//     return msg;
//   };

//   $scope.sayLovesMessage = function () {
//     var msg = "Yaakov likes to eat healthy snacks at night!";
//     msg = lovesFilter(msg)
//     return msg;
//   };

//   $scope.feedYaakov = function () {
//     $scope.stateOfBeing = "fed";
//   };
// }

// function LovesFilter() {
//   return function (input) {
//     input = input || "";
//     input = input.replace("likes", "loves");
//     return input;
//   };
// }

// function TruthFilter() {
//   return function (input, target, replace) {
//     input = input || "";
//     input = input.replace(target, replace);
//     return input;
//   }
// }

// })();