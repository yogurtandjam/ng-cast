angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      select: '<'
    },
    controller: function() {
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
