angular.module('video-player')
  .service('youTube', function($http, app, query) {
    console.log('search query: ', query);
    this.$http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: 'true',
        maxResults: 5,
        q: query
      }
    }).then(function success(data) {
      console.log('return data', data);
      app.videos = data.videos;
    },
    function error(data) {
    });
  });
