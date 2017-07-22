'use strict';
const controller = require('../controllers/blogPostController');
module.exports = function(app) {
  app.route('/blogPosts')
    .get(controller.getAll);

  app.route('/blogPosts/:blogPostId')
    .get(controller.get);
};