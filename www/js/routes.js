angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('bPL20162.bPL2016', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bPL2016.html',
        controller: 'bPL2016Ctrl'
      }
    }
  })

  .state('cart', {
    url: '/page2',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl'
  })

  .state('bPL20162.cloud', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('bPL20162', {
    url: '/side-menu21',
    templateUrl: 'templates/bPL20162.html',
    controller: 'bPL20162Ctrl'
  })

  .state('page', {
    url: '/page4',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('page2', {
    url: '/page5',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('bPL20162.page6', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page6.html',
        controller: 'page6Ctrl'
      }
    }
  })

  .state('bPL20162.page7', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page7.html',
        controller: 'page7Ctrl'
      }
    }
  })

  .state('bPL20162.Tv', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Tv.html',
        controller: 'TvCtrl'
      }
    }
  })

  .state('bPL20162.page9', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page9.html',
        controller: 'page9Ctrl'
      }
    }
  })

  .state('bPL20162.page10', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page10.html',
        controller: 'page10Ctrl'
      }
    }
  })

  .state('bPL20162.page11', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page11.html',
        controller: 'page11Ctrl'
      }
    }
  })

  .state('bPL20162.page12', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page12.html',
        controller: 'page12Ctrl'
      }
    }
  })

  .state('bPL20162.page13', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page13.html',
        controller: 'page13Ctrl'
      }
    }
  })

  .state('bPL20162.page14', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page14.html',
        controller: 'page14Ctrl'
      }
    }
  })

  .state('bPL20162.page15', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page15.html',
        controller: 'page15Ctrl'
      }
    }
  })

  .state('bPL20162.page16', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page16.html',
        controller: 'page16Ctrl'
      }
    }
  })

  .state('bPL20162.gTVLive', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gTVLive.html',
        controller: 'gTVLiveCtrl'
      }
    }
  })

  .state('bPL20162.cHANNEL9', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cHANNEL9.html',
        controller: 'cHANNEL9Ctrl'
      }
    }
  })

  .state('bPL20162.tEN', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tEN.html',
        controller: 'tENCtrl'
      }
    }
  })

  .state('bPL20162.page20', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page20.html',
        controller: 'page20Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});