const blogPosts = require('../data/blogPostCollection').all;


exports.getAllBy = function(query) {
  return blogPosts
          .filter(p => !query.locale || (p.locale == query.locale))
          .filter(p => !query.category || (p.category == query.category))
          .filter(p => !query.author || (p.author == query.author));
};