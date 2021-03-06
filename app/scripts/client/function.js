'use strict';

var client = angular.module('lelylan.function', ['ngResource']);

client.factory('Function', ['RequestWrapper', '$resource', 'lelylan.config', function(RequestWrapper, $resource, config) {

  var resource = $resource(
    config.endpoint + '/functions/:id',
    { id: '@id' },
    { update: { method: 'PUT' },
      public: { method: 'GET', params: { id: 'public' }, isArray: true } }
  );

  return RequestWrapper.wrap(resource, ['get', 'query', 'save', 'update', 'delete']);
}]);
