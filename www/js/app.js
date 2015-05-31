// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['angular.filter', 'ionic', 'ionic-material', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('top');
  $ionicConfigProvider.tabs.style("standard");

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.crianca', {
    url: '/crianca',
    views: {
      'tab-crianca': {
        templateUrl: 'templates/tab-crianca.html',
        controller: 'criancaCtrl'
      }
    }
  })
  .state('tab.crianca-detail', {
    url: '/crianca/:chatId',
    views: {
      'tab-crianca': {
        templateUrl: 'templates/crianca-detail.html',
        controller: 'CriancaDetailCtrl'
      }
    }
  })

  .state('tab.adulto', {
      url: '/adulto',
      views: {
        'tab-adulto': {
          templateUrl: 'templates/tab-adulto.html',
          controller: 'adultoCtrl'
        }
      }
    })
    .state('tab.adulto-detail', {
      url: '/adulto/:chatId',
      views: {
        'tab-adulto': {
          templateUrl: 'templates/adulto-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.idoso', {
    url: '/idoso',
    views: {
      'tab-idoso': {
        templateUrl: 'templates/tab-idoso.html',
        controller: 'idosoCtrl'
      }
    }
  })
  .state('tab.idoso-detail', {
    url: '/idoso/:chatId',
    views: {
      'tab-idoso': {
        templateUrl: 'templates/idoso-detail.html',
        controller: 'idosoDetailCtrl'
      }
    }
  })

  .state('tab.especial', {
    url: '/especial',
    views: {
      'tab-especial': {
        templateUrl: 'templates/tab-especial.html',
        controller: 'especialCtrl'
      }
    }
  })
  .state('tab.especial-detail', {
    url: '/especial/:chatId',
    views: {
      'tab-especial': {
        templateUrl: 'templates/especial-detail.html',
        controller: 'especialDetailCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/crianca');

});
