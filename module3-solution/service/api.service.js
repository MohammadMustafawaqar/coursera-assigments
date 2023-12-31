(
    function () {
        var app = angular.module('app')

        app.factory('RestaurantService', function ($http, $q) {
            return {
                getRestaurants: function (searchTerm) {
                    var deferred = $q.defer();
                    return $http({
                        method: 'Get',
                        url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then((result) => {
                        var data = result.data;

                        var allMenuItems = Object.values(data).reduce(function (acc, category) {
                            return acc.concat(category.menu_items);
                        }, []);
                        var foundItems = allMenuItems.filter(function (item) {
                            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
                        });
                        if (foundItems.length > 0) {
                            deferred.resolve(foundItems)
                        } else {
                            deferred.reject('Nothing to display')
                        }
                    return deferred.promise

                    })
                }
            }
        })

    }
)();