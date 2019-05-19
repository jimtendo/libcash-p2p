'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on libcash-p2p Module {0}'
};

module.exports = require('libcash').errors.extend(spec);
