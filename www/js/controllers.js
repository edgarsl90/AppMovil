angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $rootScope) {
    // Flag for video Configuration
    //$scope.streamingVideoReady = false;
    // Getting Apps Icons according to current platform
    if ( ionic.Platform.isAndroid() )
    {
      $rootScope.styles = 
        {
          home:'icon ion-android-home',
          servicios:'icon ion-briefcase',
          account:'icon ion-gear-a',
          notifications:'icon ion-paper-airplane',
          suscriptions:'icon ion-social-buffer-outline',
          signs:'icon ion-android-sad',
        };
    } else 
    {
      $rootScope.styles =
        {
          home:'icon ion-ios-home-outline',
          servicios:'icon ion-ios-briefcase-outline',
          account:'icon ion-ios-gear-outline',
          notifications:'ion-ios-paperplane-outline',
          suscriptions:'icon ion-social-buffer',
          signs:'icon ion-sad-outline',
        };
    }
    $scope.styles = $rootScope.styles;
})

.controller('DashCtrl', function($scope, Promotions) {
  $scope.promotions = Promotions.all();
})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    
  };
})


.controller('UserCtrl', function($scope, $stateParams) {
  
})

.controller('loginCtrl', function($scope, $stateParams) {
  
})

.controller('Sign-upCtrl', function($scope, $stateParams) {
  
})

.controller('NotificationsCtrl', function($scope, Notifications) {
    $scope.notifications = Notifications.all();
})

.controller('SuscriptionsCtrl', function($scope, Chats) { 
    $scope.chats = Chats.all(); 
})


.controller('notificationsDetailCtrl', function($scope, $stateParams, Notifications){
  $scope.notifications = Notifications.get($stateParams.notiId);
})

.controller('SuscriptionsDetailCtrl', function($scope, $stateParams, Chats){
  $scope.chat = Chats.get($stateParams.chatId);
})

