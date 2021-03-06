'use strict';

var client = angular.module('lelylan.status', ['ngResource'])

client.factory('Status', ['RequestWrapper', '$resource', 'lelylan.config', function(RequestWrapper, $resource, config) {

  var resource = $resource(
    config.endpoint + '/statuses/:id',
    { id: '@id' },
    { update: { method: 'PUT' },
      public: { method: 'GET', params: { id: 'public' }, isArray: true } } );

  return RequestWrapper.wrap(resource, ['get', 'query', 'save', 'update', 'delete']);
}]);
