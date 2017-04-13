angular
		.module("app", [ "kendo.directives" ])
		.controller(
				"MyCtrl",
				function($scope, $http) {
					$http(
							{
								method : "GET",
								url : "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
								
							})
							.success(
									function(result) {
										$scope.customOptions.dataSource = new kendo.data.DataSource(
												{
													data : result.d
												});
									});
					$scope.customOptions = {
						dataTextField : "ProductName",
						dataValueField : "ProductID"
					};
				});