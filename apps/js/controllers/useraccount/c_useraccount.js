define([
    'angular'
    ,'mod'
], function(angular, mod){
    /**
     * @class dashboardCtrl
     * @description dashboard控制器
     */
    angular.module(mod.name).controller('useraccountCtrl',['$rootScope', '$scope', '$stateParams', '$http', '$timeout', function ($rootScope, $scope, $stateParams, $http, $timeout) {
        /**
         * @description
         */
        $scope.$on('$viewContentLoaded', function () {
            // initialize core components
            //App.initAjax();
        });
        /**
         * @description table data
         * @type {boolean}
         */
        $scope.myData = [
            {"时间": "2016-01-20","标题": "test", "来源": "test1", "操作":"123"},
            {"时间": "2016-01-20","标题": "test", "来源": "test1", "操作":"123"},
            {"时间": "2016-01-20","标题": "test", "来源": "test1", "操作":"123"},
            {"时间": "2016-01-20","标题": "test", "来源": "test1", "操作":"123"},
            {"时间": "2016-01-20","标题": "test", "来源": "test1", "操作":"123"},
            {"时间": "2016-01-20","标题": "test", "来源": "test1", "操作":"123"}];

        $scope.gridOptions = {};

        $scope.gridOptions.columnDefs = [
            { name:'id', width:50 },
            { name:'name', width:100, pinnedLeft:true },
            { name:'age', width:100, pinnedRight:true  }
            //{ name:'address.street', width:150  },
            //{ name:'address.city', width:150 },
            //{ name:'address.state', width:50 },
            //{ name:'address.zip', width:50 },
            //{ name:'company', width:100 },
            //{ name:'email', width:100 },
            //{ name:'phone', width:200 },
            //{ name:'about', width:300 }
            //{ name:'friends[0].name', displayName:'1st friend', width:150 },
            //{ name:'friends[1].name', displayName:'2nd friend', width:150 },
            //{ name:'friends[2].name', displayName:'3rd friend', width:150 },
        ];

        $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json')
            .success(function(data) {
                $scope.gridOptions.data = data;
            });


        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    }]);
});
