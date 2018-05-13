angular.module('video-player')
  .service('youTube', function($http) {
    this.searchYouTube = function(query) {
      return ($http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: window.YOUTUBE_API_KEY,
          type: 'video',
          videoEmbeddable: 'true',
          maxResults: 5,
          q: query,
          part: 'snippet'
        }
      }));
    };
  });
