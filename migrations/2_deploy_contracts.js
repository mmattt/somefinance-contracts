var Distributor = artifacts.require("Distributor"); // TODO
var DummyToken = artifacts.require("DummyToken"); // DONE
var Masonry = artifacts.require("Masonry");  // DONE
var Oracle = artifacts.require("Oracle"); // TODO
var TBond = artifacts.require("TBond"); // TODO
var TShare = artifacts.require("TShare"); // TODO
var TaxOffice = artifacts.require("TaxOffice"); // TODO
var TombTaxOracle = artifacts.require("TombTaxOracle"); // TODO
var Timelock = artifacts.require("Timelock"); // TODO
var Tomb = artifacts.require("Tomb"); // TODO
var Treasury = artifacts.require("Treasury");  // TODO


module.exports = function(deployer) {
  deployer.deploy(DummyToken);
  deployer.deploy(Masonry);
  deployer.deploy(Tomb, 1000 /* 10% tax rate */, "0x446cACaBFF2b1A98a195f6532aAD9184619d41da");
  deployer.deploy(TShare, 1643012641 /* start time */ , "0xeDFDA8DB4a16e1065E8324fA60f1c6eeBccd6783", "0x56722dd61D8616071907005b483529d1eb62F46b");
};
