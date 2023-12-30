(function () {
    var app = angular.module('app', []);

    app.controller('AlreadyBoughtController', AlreadyBoughtController);
    app.controller('ToBuyController', ToBuyController);
  
    AlreadyBoughtController.$inject = ['$scope', 'dataService'];
    ToBuyController.$inject = ['$scope', 'dataService'];
    (function () {
        'use strict';
      
        angular.module('ShoppingListCheckOff', [])
          .controller('ToBuyController', ToBuyController)
          .controller('AlreadyBoughtController', AlreadyBoughtController)
          .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
      
        ToBuyController.$inject = ['ShoppingListCheckOffService'];
        function ToBuyController(ShoppingListCheckOffService) {
          var toBuyCtrl = this;
      
          toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
      
          toBuyCtrl.markAsBought = function (index) {
            ShoppingListCheckOffService.markAsBought(index);
          };
        }
      
        AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
        function AlreadyBoughtController(ShoppingListCheckOffService) {
          var alreadyBoughtCtrl = this;
      
          alreadyBoughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
        }
      
        function ShoppingListCheckOffService() {
          var service = this;
      
          var toBuyItems = [
            { name: 'Cookies', quantity: 10 },
            { name: 'Apples', quantity: 5 },
            { name: 'Chips', quantity: 3 },
            { name: 'Milk', quantity: 2 },
            { name: 'Bread', quantity: 1 }
          ];
      
          var boughtItems = [];
      
          service.getToBuyItems = function () {
            return toBuyItems;
          };
      
          service.getBoughtItems = function () {
            return boughtItems;
          };
      
          service.markAsBought = function (index) {
            var item = toBuyItems.splice(index, 1)[0];
            boughtItems.push(item);
          };
        }
      })();
    function AlreadyBoughtController($scope, dataService) {
      $scope.items = dataService.alreadyBoughtItems();
      console.log($scope.items);
    }
  
    function ToBuyController($scope, dataService) {
      $scope.items = dataService.toBuyItems();
      
      $scope.makeAsBought = function (id) {
        dataService.markItemAsBought(id);
        console.log($scope.items);
        $scope.items = dataService.toBuyItems();
      };
    }
  })();