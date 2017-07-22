'use strict';

const service = require('../services/blogPostService');

exports.getAll = function(req, res) {
  res.send(service.getAll(req.query));
};

exports.get = function(req, res) {
  res.send(service.get(req.params.blogPostId));
};
