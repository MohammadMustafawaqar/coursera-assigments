(
    function () {
        var app = angular.module('app')
        app.factory('dataService', function () {

            var toBuyItems  = [
                {
                    id: 1,
                    name: 'iphone 15 Pro Max',
                    quantity: 15,
                    isSold: false
                },
                {
                    id: 2,
                    name: 'iphone 14 Pro',
                    quantity: 15,
                    isSold: false
                },
                {
                    id: 3,
                    name: 'Galaxy S23 Ultra',
                    quantity: 15,
                    isSold: false
                },
                {
                    id: 4,
                    name: 'iphone 13 ',
                    quantity: 15,
                    isSold: false
                },
                {
                    id: 5,
                    name: 'iphone 12 Pro ',
                    quantity: 15,
                    isSold: false
                },
                {
                    id: 6,
                    name: 'iphone 11 Pro Max',
                    quantity: 15,
                    isSold: false
                },
            ]
            
            var boughtItems = []
            return {
                toBuyItems:  function(){
                    return toBuyItems
                },

                alreadyBoughtItems : function(){
                    return boughtItems
                },

                markItemAsBought: function(itemIndex){
                    var item = toBuyItems.splice(itemIndex, 1)[0]
                    boughtItems.push(item)
                }   
            }
        })

    }

)();