(function(){
    "use strict";

	var module = angular.module("candor");

	module.component("applicationsList",{
		templateUrl: basePath.PORTAL_C_applicationList + "applications-list/applications-list.html",
		bindings: {
			nifIsValid:'<',
			searchString: '<',
			refresh:'<',
			$router:'<'
		},
		controllerAs:"vm",
		controller: creditListController
	}) 

	creditListController.$inject = ['VfrAction','$filter', 'dataService','$scope','$timeout','$rootScope','Loading', 'applicationService']
	function creditListController(VfrAction, $filter, dataService , $scope, $timeout,$rootScope, Loading, applicationService){
		 
		var vm = this;
		vm.numberOfCards = 25;
		vm.$onInit = init;
		vm.$onChanges = onChanges;
		vm.getFilteredApps = getFilteredApps;
		vm.goToCreditPanelState = goToCreditPanelState;
		vm.showMoreCards = showMoreCards;
		vm.searchOptions = {
			available: [
				{name:'Em Curso', status: 'Contract - Running'},
	            {name:'Em Atraso', status: 'Contract - Arrears'},
	            {name:'Contencioso', status: 'Contract - Lawsuit'},
	            {name:'Todas', status: undefined}
			],
			selected:{name:'Todas', status: undefined},//This sets the default value of the select in the ui;
			empty:{name:'Todas',status: undefined}
		};
		
		function init(){
			if(dataService.getContractAppListInMemory.length==0){
				Loading.start('all');
			}else{
				vm.applications = dataService.getContractAppListInMemory;
				vm.filteredApp = getFilteredApps(vm.applications, vm.searchString);
			}
			dataService.getVendorContractApps().then(function(result){
				vm.applications =  result;
				vm.filteredApp = getFilteredApps(vm.applications, vm.searchString);
				Loading.stop('all');
			})	
			.catch(function(error){Loading.stop('all');});
		}

		//TODO: Implement lazyloads of accounts in order to solve watchs problems when list 
		//of clients is big.
		function showMoreCards(scroll){
			vm.numberOfCards = (scroll=='down') ? vm.numberOfCards + 5 : vm.numberOfCards;
		 	vm.numberOfCards = (scroll=='up' &&  vm.numberOfCards>20) ? vm.numberOfCards - 5 : vm.numberOfCards;
			$scope.$apply();
		};		

		function goToCreditPanelState(app){
			
			if(app.Status__c != 'Contract - Running') return;
			
			var clientArray = dataService.getClientListInMemory;
			var client = [];
			if(clientArray){
				client = clientArray.filter(function(client){
					return client.Id == app.AccClient__c
				});
				client = client[0];
			}

			!client || applicationService.setCurrentApp(dataService.getApplicationFromClient(app.Id, client));
			//client.length == 0 || applicationService.setCurrentApp(dataService.getApplication(app.Id));
			vm.$router.navigate(['Credit','CreditPanel',{appid:app.Id},'State']);
		}

		function onChanges(change){
			vm.searchOptions.selected = vm.searchOptions.empty;
			vm.filteredApp = getFilteredApps(vm.applications, vm.searchString);
			vm.validRequest = false;//é sempre invalido pq vai servir apenas para pesquisa
			if(vm.filteredApp){
				vm.filtered_apps_size = vm.filteredApp.length;
			}
			if(vm.refresh){
				init();
			}
			$scope.$emit('requestValidation', {valid: vm.validRequest, filtered_accs_size: vm.filtered_apps_size});
		}

		function getFilteredApps(applications, searchString){
			var optionFilter = {Status__c : vm.searchOptions.selected.status};
			var filteredbyOptions = $filter('filter')(applications, optionFilter);
			var filteredApp = $filter('filter')(filteredbyOptions, searchString);
			if(filteredApp){vm.filtered_apps_size = filteredApp.length;}
			return filteredApp;
		}
	}
}());
