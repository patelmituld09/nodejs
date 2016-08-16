var myApp=angular.module("myApp",[]);

myApp.controller("myCtrl",function($scope,$http){
	
		$scope.del= [];
			$scope.i =[];
				
					
						var http=$http.get("/data");
							http.success(function(response){
								    $scope.names=response;
								    	   
									   	});
											http.error(function(data){
												    alert("error");
												    	});
														$scope.deleterow=function(index){
																$scope.del.push ($scope.names[index]);
																		$scope.i.push( index);
																				$scope.names.splice(index,1);
																					}
																						
																							
																							});


