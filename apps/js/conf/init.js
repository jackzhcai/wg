define([
    'angular'
    ,'apps'
], function(angular, apps){

    /**
     * @description $controllerProvider
     */
    apps.config(['$controllerProvider', function($controllerProvider, $window) {
        $controllerProvider.allowGlobals();
    }]);

    /**
     * @description $httpProvider
     */
    apps.config(['$httpProvider', function($httpProvider){
        //
        //console.log("$httpProvider");
    }]);

    /**
     * @description $httpProvider
     */
    apps.run(["$rootScope", "settings", "$state",'$window', function($rootScope, settings, $state, $window) {
        /*if(true){
            $window.location.href = "signin.html";
        }*/
        $rootScope.$state = $state; // state to be accessed from view
        $rootScope.$settings = settings; // state to be accessed from view
    }]);


});
