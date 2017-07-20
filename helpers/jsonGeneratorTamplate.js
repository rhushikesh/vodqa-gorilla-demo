[
  '{{repeat(50)}}',
  {
    id:'{{objectId()}}',
    createdAt: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    title: '{{lorem(1, "sentences")}}',
    content: '{{lorem(integer(1, 3), "paragraphs")}}',
    locale: '{{random("en_GB", "en_IN", "en_US")}}',
    category: '{{random("travel", "food", "photography")}}',
    tags: [
      '{{repeat(integer(1, 5))}}',
      '{{lorem(1, "words")}}'
    ],
    author: '{{firstName()}} {{surname()}}',
    social: function (tags) {
      var facebookCount = tags.integer(1, 100);
      var tweeterCount = tags.integer(1, 100);
        return {
        total: facebookCount + tweeterCount,
        facebook: facebookCount,
        tweeter: tweeterCount
      };
    }
  }
]