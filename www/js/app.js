// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ionic.cloud','app.controllers', 'app.routes', 'app.directives','app.services',])

.config(function($ionicConfigProvider, $sceDelegateProvider){


  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

})
  .config(function($ionicCloudProvider) {
    $ionicCloudProvider.init({
      "core": {
        "app_id": "ea4c8943"
      }
    });
  })

.run(function($ionicPlatform,$ionicDeploy,$ionicPopup) {
  $ionicPlatform.ready(function() {

    $ionicDeploy.channel = 'dev';
    //  var deploy = new Ionic.Deploy();
    $ionicDeploy.check().then(function (updateAvailable) {
      if(updateAvailable){
        console.log("update available....:.... ");
        console.log(updateAvailable);
        $ionicDeploy.download().then(function () {
          console.log('download.......');
          console.log($ionicDeploy.download());

          $ionicDeploy.extract().then(function () {
            // $ionicDeploy.unwatch();


            var confirmPopup = $ionicPopup.confirm({
              title: 'Update available',
              template: 'Are you sure you want to update new version..? '
            });

            confirmPopup.then(function(res) {
              if(res) {
                //  $ionicDeploy.extract();
                $ionicDeploy.load();
                console.log('You are sure');
              } else {
                console.log('You are not sure');
              }
            });



            /*    $ionicPopup.confirm({
             title:'Update Available',
             subTitle:'An update was just downloaded.would u like  to restart your application',
             button:[
             {text : 'Not now'},
             {
             text  : 'Restart',
             onTap : function (e) {
             $ionicDeploy.extract();
             $ionicDeploy.load();
             }
             }
             ]
             });*/
          });
        });
      }
    },function () {

    });





    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
