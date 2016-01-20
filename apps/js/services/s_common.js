/**
 * Created by Jack on 2016/1/9.
 */
define([
    'angular'
    ,'apps'
], function(angular, apps){
    /**
     * @deacription Setup global settings
     **/
    apps.factory('settings', ['$rootScope', function($rootScope) {
        var settings = {
            layout: {
                pageSidebarClosed: false, // sidebar menu state
                pageContentWhite: true, // set page content layout
                pageBodySolid: false, // solid body color state
                pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
            },
            assetsPath: 'assets',
            globalPath: 'assets/global',
            layoutPath: 'assets/layouts'
        };
        $rootScope.settings = settings;
        return settings;
    }]);
    /**
     * @class actinService
     * @description 请求入口
     */
    apps.factory('actinService', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http){
        var query = function(options){
            return $http(options);
        };
        return {
            query: query
        }
    }])
})
