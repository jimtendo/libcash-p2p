'use strict';

var should = require('chai').should();
var P2P = require('../../');
var Message = P2P.Messages.Message;
var Networks = require('libcash').Networks;

describe('Message', function() {

  describe('@constructor', function() {
    it('construct with magic number and command', function() {
      var message = new Message({
        network: {
          networkMagic: Networks.defaultNetwork.networkMagic
        },
        command: 'command'
      });
      should.exist(message);
      message.command.should.equal('command');
      message.network.networkMagic.should.equal(Networks.defaultNetwork.networkMagic);
    });
  });

  describe('#toBuffer', function() {
    it('serialize to a buffer', function() {
      var message = new Message({
        command: 'command',
        network: Networks.defaultNetwork
      });
      message.getPayload = function() {
        return new Buffer(0);
      };
      var buffer = message.toBuffer();
      var expectedBuffer = new Buffer('e3e1f3e8636f6d6d616e640000000000000000005df6e0e2', 'hex');
      buffer.should.deep.equal(expectedBuffer);
    });
  });

});
