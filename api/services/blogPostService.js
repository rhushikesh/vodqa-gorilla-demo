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

function removeEmptyTags(post) {
  if(post.tags != null && post.tags.length == 0) {
    post.tags = null;
  }
  return post;
}

function filterRelatedBlogPosts(post) {
  const currentLocale = post.locale;
  const filteredRelatedBlogPosts = post.relatedBlogPosts.filter(rP => rP.locale == currentLocale);
  post.relatedBlogPosts = filteredRelatedBlogPosts;
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

function filterByQuery(post, query) {
  return filterByLocale(post, query.locale)
    && filterByCategory(post, query.category)
    && filterByAuthor(post, query.author);
}

function applyOriginal(post) {
  return filterRelatedBlogPosts(post);
}

function applyV1(post) {
  const withUpdatedSocialShareCount = updateSocialShareCount(post)
  return removeEmptyTags(withUpdatedSocialShareCount);
}

function applyV2(post) {
  const withUpdatedSocialShareCount = updateSocialShareCount(post)
  return filterRelatedBlogPosts(withUpdatedSocialShareCount);
}

const processorFunction = applyOriginal;

exports.getAll = function(query) {
  return blogPosts
          .filter(p => filterByQuery(p, query))
          .map(processorFunction);
};

exports.get = function(blogPostId) {
  const getById = blogPosts
                    .filter(p => p.id == blogPostId)
                    .map(processorFunction)[0];

  if(getById) return getById;
  return {};
};