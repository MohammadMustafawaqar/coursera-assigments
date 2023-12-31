(
    function () {
        var app = angular.module('app', [])
            .directive('foundItems', foundItemsDirective)
            .controller('RestaurantMenuItemController', RestaurantMenuItemController)
            .component('loadingIndicator', {
                templateUrl: 'loading/spinner.html'
            })

        function foundItemsDirective() {
            var ddo = {
                restrict: 'E',
                scope: {
                    found: '=',
                    onRemove: '&'
                },
                templateUrl: 'directives/found-items.html',
                controller: 'RestaurantMenuItemController',
                controllerAs: 'resItemCtrl',
                bindToController: true
            };
            return ddo;
        }


        function RestaurantMenuItemController(RestaurantService) {
            var items = this
            items.menuItems = [];
            items.search = ''
            items.message = ''
            items.loading = false

            items.getItems = function () {
                items.menuItems = [];
                items.loading = true;
                if (items.search.trim() === "") {
                    items.menuItems = [];
                    items.message = 'Nothing to display';
                    items.loading = false;
                    return

                    
                }else{
                    RestaurantService.getRestaurants(items.search)
                    .then((result) => {
                        items.menuItems = result;
                        items.loading = false;
                    }).catch((err) => {
                        console.log(err)
                        items.loading = false;
                        items.message = err
                    });

                    items.message = ''
                }
                
                    

            }

            items.removeItem = function (item) {
                var index = items.menuItems.indexOf(item);
                items.menuItems.splice(index, 1);
            }
        }


    }
)();
