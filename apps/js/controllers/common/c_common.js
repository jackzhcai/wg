/**
 * @description 用于存放公部分的controller
 * @date 2016/1/9
 * 包含：AppController, HeaderController, SidebarController,
 *       QuickSidebarController, ThemePanelController, FooterController
 **/

define([
    'angular'
    ,'apps'
], function(angular, apps){
    /**
     * @class AppController
     * @description  Setup App Main Controller
     **/
    apps.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.$on('$viewContentLoaded', function() {
            // init core components
            //App.initComponents();
            // Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directiveLayout.init();
            //Layout.init();
        });
    }]);

    /***
     Layout Partials.
     By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial
     initialization can be disabled and Layout.init() should be called on page load complete as explained above.
     ***/

    /**
     * @class HeaderController
     * @description Setup Layout Part - Header
     **/
    apps.controller('HeaderController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
            Layout.initHeader(); // init header
        });
    }]);

    /**
     * @class SidebarController
     * @description Setup Layout Part - Sidebar
     **/
    apps.controller('SidebarController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
            Layout.initSidebar(); // init sidebar
        });
    }]);

    /**
     * @class QuickSidebarController
     * @description Setup Layout Part - Quick Sidebar
     **/
    apps.controller('QuickSidebarController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
            setTimeout(function(){
                QuickSidebar.init(); // init quick sidebar
            }, 2000)
        });
    }]);

    /**
     * @class ThemePanelController
     * @description Setup Layout Part - Theme Panel
     **/
    apps.controller('ThemePanelController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
            Theme.init(); // init theme panel
        });
    }]);

    /**
     * @class FooterController
     * @description Setup Layout Part - Footer
     **/
    apps.controller('FooterController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
            Layout.initFooter(); // init footer
        });
    }]);

});
