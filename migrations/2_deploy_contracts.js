var DummyToken = artifacts.require("DummyToken");
var Tomb = artifacts.require("Tomb");
var Treasury = artifacts.require("Treasury");
var Masonry = artifacts.require("Masonry")

module.exports = function(deployer) {
  deployer.deploy(DummyToken);
  deployer.deploy(Masonry);
};
