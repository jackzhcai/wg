define([
    'angular'
    ,'mod'
], function(angular, mod){
    /**
     * @class dashboardCtrl
     * @description dashboard控制器
     */
    angular.module(mod.name).controller('userwebsiteCtrl',['$rootScope', '$scope', '$stateParams', '$http', '$timeout', function ($rootScope, $scope, $stateParams, $http, $timeout) {
        /**
         * @description
         */
        $scope.$on('$viewContentLoaded', function () {  });
        /**
         * @description table data
         * @type {boolean}
         */
        //$scope.gridOptions = {};

        $scope.gridOptions1 = {
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 25,
            columnDefs: [
                { name: 'name' },
                { name: 'gender' },
                { name: 'company' }
            ]
        };

        $scope.gridOptions2 = {
            enablePaginationControls: false,
            paginationPageSize: 25,
            columnDefs: [
                { name: 'name' },
                { name: 'gender' },
                { name: 'company' }
            ]
        };

        $scope.gridOptions2.onRegisterApi = function (gridApi) {
            $scope.gridApi2 = gridApi;
        }

        $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
            .success(function (data) {
                $scope.gridOptions1.data = data;
                //$scope.gridOptions2.data = data;
            });

        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    }]);
});
