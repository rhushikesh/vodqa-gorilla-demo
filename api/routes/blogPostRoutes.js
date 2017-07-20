'use strict';
const service = require('../controllers/blogPostController');
module.exports = function(app) {
  app.route('/blogPosts')
    .get(service.getAll);
};