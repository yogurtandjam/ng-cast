angular.module('video-player')
  .component('search', {
    bindings: {
      update: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
