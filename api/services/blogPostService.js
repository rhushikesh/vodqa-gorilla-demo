const blogPosts = require('../data/blogPostCollection').all;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function updateSocialShareCount(post) {
  const randomNumber1 = getRandomInt(1, 3);
  const randomNumber2 = getRandomInt(1, 4);
  post.social.total = post.social.total + randomNumber1 + randomNumber2;
  post.social.facebook = post.social.facebook + randomNumber1;
  post.social.tweeter = post.social.tweeter + randomNumber2;

  return post;
}

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
          .filter(p => filterByAuthor(p, query.author))
          .map(updateSocialShareCount);
};