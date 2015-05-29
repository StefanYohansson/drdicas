angular.module('starter.services', [])

.factory('adulto', function($http) {
  return {
    all: function() {
      return $http.get('http://drdicas.pythonanywhere.com/artigos/adulto/');
    },
    remove: function(chat) {
      adulto.splice(adulto.indexOf(chat), 1);
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
    remove: function(chat) {
      crianca.splice(crianca.indexOf(chat), 1);
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
    remove: function(chat) {
      idoso.splice(idoso.indexOf(chat), 1);
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
    remove: function(chat) {
      especial.splice(especial.indexOf(chat), 1);
    },
    get: function(chatId) {
      return $http.get('http://drdicas.pythonanywhere.com/artigos/'+chatId+'/especial/');
    }
  };
});
