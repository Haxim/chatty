angular.module('chatty', ['ngSanitize', 'RecursionHelper', 'LocalStorageModule'],
    function($rootScopeProvider) {
        //necessary to allow commentDirective to be recursive
        $rootScopeProvider.digestTtl(60);
    }).config(function(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('chatty');
    }).run(function(eventService) {
        eventService.load();
    });