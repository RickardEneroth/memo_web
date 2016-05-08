  angular.module("myapp", [])
     .controller("MyController", function($scope, $http) {
       $scope.myForm = {};
       $scope.myForm.name = "Rickard";
       $scope.myForm.memo = "";

     $scope.myForm.submitTheFormGetAll = function(item, event) {
       
       	var dataObject = { name : $scope.myForm.name, memo : $scope.myForm.memo };
       	
	$http.get('https://immense-scrubland-69667.herokuapp.com/memo/getall').success(function(data) {$scope.memo_response = data;});
     }

     $scope.myForm.submitTheFormGet = function(item, event) {
       
       	var dataObject = { name : $scope.myForm.name, memo : $scope.myForm.memo };
       	
	$http.get('https://immense-scrubland-69667.herokuapp.com/memo/getall?userId=' + $scope.myForm.name).success(function(data) {$scope.memo_response = data;});
     }
     
     $scope.myForm.submitTheFormDel = function(item, event) {
            
        var dataObject = { name : $scope.myForm.name, memo : $scope.myForm.memo };
     	
     	$http.get('https://immense-scrubland-69667.herokuapp.com/memo/deleteall?userId=' + $scope.myForm.name).success(function(data) {});
     	
     	$http.get('https://immense-scrubland-69667.herokuapp.com/memo/getall').success(function(data) {$scope.memo_response = data;});
     	
     	alert("Alla memos för " + $scope.myForm.name + " borttagna!");
     }
     
     $scope.myForm.submitTheFormAdd = function(item, event) {
                 
     	var dataObject = { name : $scope.myForm.name, memo : $scope.myForm.memo };
          	
     	$http.get('https://immense-scrubland-69667.herokuapp.com/memo/add?userId=' + $scope.myForm.name + '&memo=' + $scope.myForm.memo).success(function(data) {});
          	
     	$http.get('https://immense-scrubland-69667.herokuapp.com/memo/getall').success(function(data) {$scope.memo_response = data;});
          	
     	alert("Nytt memo för " + $scope.myForm.name + " tillagt!");
     }
     
  });