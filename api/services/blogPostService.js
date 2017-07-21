const blogPosts = require('../data/blogPostCollection').all;

function filterByLocale(post, locale) {
  return !locale || (post.locale == locale);
}

function filterByCategory(post, category) {
  return !category || (post.category == category);
}

function filterByAuthor(post, author) {
  return !author || (post.author == author);
}

exports.getAllBy = function(query) {
  return blogPosts
          .filter(p => filterByLocale(p, query.locale))
          .filter(p => filterByCategory(p, query.category))
          .filter(p => filterByAuthor(p, query.author));
};