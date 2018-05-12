angular.module('video-player')
  .controller('searchCtrl', ['$scope', 'youTube', function($scope, youTube) {
    this.thing = function() { console.log('hey'); };
    console.log(this);
  }])
  .component('search', {
    templateUrl: 'src/templates/search.html'
  });
