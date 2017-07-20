'use strict';

const repo = require('../services/blogPostService');

exports.getAll = function(req, res) {
  res.send(repo.getAllBy(req.query));
};
