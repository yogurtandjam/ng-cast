angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      select: '<'
    },
    controller: function() { console.log(this); },
    templateUrl: 'src/templates/videoList.html' 
  });
