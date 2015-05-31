angular.module('starter.services', [])

.factory('adulto', function($http) {
  return {
    all: function() {
      return $http.get('http://drdicas.pythonanywhere.com/artigos/adulto/');
    },
    get: function(chatId) {
      return $http.get('http://drdicas.pythonanywhere.com/artigos/'+chatId+'/adulto/');
    }
  };
})

.factory('crianca', function($http) {

  return {
    all: function() {
      return $http.get('http://drdicas.pythonanywhere.com/artigos/crianca/');
    },
    get: function(chatId) {
      return $http.get('http://drdicas.pythonanywhere.com/artigos/'+chatId+'/crianca/');
    }
  };
})

.factory('idoso', function($http) {

  return {
    all: function() {
      return $http.get('http://drdicas.pythonanywhere.com/artigos/idoso/');
    },
    get: function(chatId) {
      return $http.get('http://drdicas.pythonanywhere.com/artigos/'+chatId+'/idoso/');
    }
  };
})

.factory('especial', function($http) {

  return {
    all: function() {
      return $http.get('http://drdicas.pythonanywhere.com/artigos/especial/');
    },
    get: function(chatId) {
      return $http.get('http://drdicas.pythonanywhere.com/artigos/'+chatId+'/especial/');
    }
  };
})

.factory('slider', function($http) {

  var sliders = ['img/Imagem_02.jpg', 'img/Imagem_01.jpg', 'img/Imagem_04.png', 'img/Imagem_03.jpg'];

  return {
    all: function() {
      return sliders;
    },
    get: function(key) {
      return sliders[key];
    }
  };
});
