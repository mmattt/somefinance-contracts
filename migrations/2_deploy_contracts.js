var DummyToken = artifacts.require("DummyToken");
var Tomb = artifacts.require("Tomb");
var Treasury = artifacts.require("Treasury");

module.exports = function(deployer) {
  deployer.deploy(DummyToken);
  deployer.deploy(Tomb);
};
