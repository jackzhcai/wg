/**
 * Created by Jack on 2016/1/9.
 */
define([
    'angular'
    ,'mod'
], function(angular, mod){
    /**
     * @class securityCtrl
     * @description 修改密码控制器
     */
    angular.module(mod.name).controller('securityCtrl',['$rootScope', '$scope', '$stateParams', '$http', '$timeout', function ($rootScope, $scope, $stateParams, $http, $timeout) {

        $scope.$on('$viewContentLoaded', function () {
            // initialize core components
            //App.initAjax();
        });
        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    }]);
});
