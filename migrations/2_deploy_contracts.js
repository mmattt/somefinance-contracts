var DummyToken = artifacts.require("DummyToken");
var Tomb = artifacts.require("Tomb");
var Treasury = artifacts.require("Treasury");
var TShare = artifacts.require("TShare");
var Masonry = artifacts.require("Masonry")

module.exports = function(deployer) {
  deployer.deploy(DummyToken);
  deployer.deploy(Masonry);
  deployer.deploy(TShare, 1643012641, "0xeDFDA8DB4a16e1065E8324fA60f1c6eeBccd6783", "0x56722dd61D8616071907005b483529d1eb62F46b");
};
