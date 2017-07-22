'use strict';

const repo = require('../services/blogPostService');

exports.getAll = function(req, res) {
  res.send(repo.getAllByV2(req.query));
};
