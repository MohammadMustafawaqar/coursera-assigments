(
    function () {
        var app = angular.module('app', [])

        app.controller('AppController', AppController)

        function AppController($scope) {
            $scope.launch = '';
            $scope.message = {
                type: '',
                content: ''
            };


            $scope.checkLaunchItems = function () {
                var items = $scope.launch.split(',')
                if(!$scope.launch){
                    $scope.message.type = 'error';
                    $scope.message.content = 'Please enter at least one launch item';
                }else if(items.length >3) {
                    $scope.message = {
                        type: 'success',
                        content: 'Too Much'
                    }
                }else{
                    $scope.message.type ='success';
                    $scope.message.content = 'Enjoy';
                };
        }



    }

}
)();