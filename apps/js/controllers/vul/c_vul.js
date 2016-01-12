/**
 * Created by Jack on 2016/1/9.
 */
define([
    'angular'
    ,'mod'
], function(angular, mod){
    /**
     * @class valCtrl
     * @description valCtrl控制器
     */
    angular.module(mod.name).controller('valCtrl', function($rootScope, $scope, $http, $timeout) {
        $scope.$on('$viewContentLoaded', function() {
            // initialize core components
            //App.initAjax();
            //alert("This is vul");
        });
        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
})
