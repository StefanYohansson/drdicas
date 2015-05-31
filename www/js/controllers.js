angular.module('starter.controllers', [])

.controller('navController', function($scope, slider, $ionicTabsDelegate, $ionicSlideBoxDelegate) {
  $scope.slider = slider.all();

  $scope.tabClick = function(index) {
    var indexes = {'crianca': 0, 'adulto': 1, 'idoso': 2, 'especial': 3};

    $ionicSlideBoxDelegate.slide(indexes[index]);

    $ionicTabsDelegate.select(indexes[index]);
  }
})

.controller('criancaCtrl', function($scope, crianca, slider) {
  var handleSuccess = function(data, status) {
    $scope.crianca = data;
  };

  crianca.all().success(handleSuccess);

})

.controller('adultoCtrl', function($scope, adulto) {
  var handleSuccess = function(data, status) {
    $scope.adulto = data;
  };

  adulto.all().success(handleSuccess);
})

.controller('CriancaDetailCtrl', function($scope, $stateParams, crianca) {
  var handleSuccess = function(data, status) {
    $scope.chat = data;
  };

  crianca.get($stateParams.chatId).success(handleSuccess);
})

.controller('ChatDetailCtrl', function($scope, $stateParams, adulto) {
  var handleSuccess = function(data, status) {
    $scope.chat = data;
  };

  adulto.get($stateParams.chatId).success(handleSuccess);
})

.controller('idosoDetailCtrl', function($scope, $stateParams, idoso) {
  var handleSuccess = function(data, status) {
    $scope.chat = data;
  };

  idoso.get($stateParams.chatId).success(handleSuccess);
})

.controller('especialDetailCtrl', function($scope, $stateParams, especial) {
  var handleSuccess = function(data, status) {
    $scope.chat = data;
  };

  especial.get($stateParams.chatId).success(handleSuccess);
})

.controller('idosoCtrl', function($scope, idoso) {
  var handleSuccess = function(data, status) {
    $scope.idoso = data;
  };

  idoso.all().success(handleSuccess);
})

.controller('especialCtrl', function($scope, especial) {
  var handleSuccess = function(data, status) {
    $scope.especial = data;
  };

  especial.all().success(handleSuccess);
});
