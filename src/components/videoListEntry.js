angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      select: '<'
    },
    controller: function() {
      console.log('videolistentry ctrl: ', this);
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
