define([
    'angular'
    ,'apps'
], function(angular, apps){
    /**
     * @description $httpProvider
     */
    apps.run(["$rootScope", "settings", "$state", function($rootScope, settings, $state) {
        $rootScope.$state = $state; // state to be accessed from view
        $rootScope.$settings = settings; // state to be accessed from view
    }]);

    /**
     * @description $controllerProvider
     */
    apps.config(['$controllerProvider', function($controllerProvider) {
        // this option might be handy for migrating old apps, but please don't use it
        // in new ones!
        $controllerProvider.allowGlobals();
    }]);

    /**
     * @description $httpProvider
     */
    apps.config(['$httpProvider', function($httpProvider){
        //
        //console.log("$httpProvider");
    }]);


});
