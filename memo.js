  angular.module("myapp", [])
     .controller("MyController", function($scope, $http) {
       $scope.myForm = {};
       $scope.myForm.name = "Rickard";
       $scope.myForm.memo = "";
       $scope.myForm.id = "";
       baseUrl = "https://immense-scrubland-69667.herokuapp.com";

     $scope.myForm.submitTheFormGetAll = function() {
	$http.get(baseUrl + '/memo/getall').success(function(data) {$scope.memo_response = data;});
     }

     $scope.myForm.submitTheFormGet = function() {
	$http.get(baseUrl + '/memo/getall?userId=' + $scope.myForm.name).success(function(data) {$scope.memo_response = data;});
     }
     
     $scope.myForm.submitTheFormDelete = function(id) {
        
	$http.delete(baseUrl + '/memo/delete?id=' + id).success(function(data) {
		$http.get(baseUrl + '/memo/getall').success(function(data) {$scope.memo_response = data;});
	});
     }
     
     $scope.myForm.submitTheFormAdd = function() {   	
     	$http.post(baseUrl + '/memo/add?userId=' + $scope.myForm.name + '&memo=' + $scope.myForm.memo).success(function(data) {});
     	$http.get(baseUrl + '/memo/getall').success(function(data) {$scope.memo_response = data;});
     }
     
  });
  