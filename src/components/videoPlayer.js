angular.module('video-player')
.component('videoPlayer', {
  bindings:{
    active: '<'
  },
  controller: function(){
    console.log('this is videoPlayer ', this)
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
