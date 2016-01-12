/**
 * Created by Jack on 2016/1/9.
 */
define([
    'angular'
    ,'mod'
], function(angular, mod){
    /**
     * @class dashboardCtrl
     * @description dashboard控制器
     */
    angular.module(mod.name).controller('dashboardCtrl',['$rootScope', '$scope', '$stateParams', '$http', '$timeout', function ($rootScope, $scope, $stateParams, $http, $timeout) {
        console.log("dashboardCtrl")
        $scope.$on('$viewContentLoaded', function () {
            // initialize core components
            App.initAjax();
        });
        $scope.test = "This is test.";
        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    }]);
});
