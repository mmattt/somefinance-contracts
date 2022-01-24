var Distributor = artifacts.require("Distributor"); // TODO
var DummyToken = artifacts.require("DummyToken"); // DONE
var Masonry = artifacts.require("Masonry");  // DONE
var Oracle = artifacts.require("Oracle"); // TODO
var TBond = artifacts.require("TBond"); // Done
var TShare = artifacts.require("TShare"); // Done
var TaxOffice = artifacts.require("TaxOffice"); // Done
var TombTaxOracle = artifacts.require("TombTaxOracle"); // TODO
var Timelock = artifacts.require("Timelock"); // Done
var Tomb = artifacts.require("Tomb"); // Done
var Treasury = artifacts.require("Treasury");  // TODO

const startTime = Math.round((new Date().getTime() + (86400000 * 2))/1000); // Today + 2 days
const day = Math.round(86400000/1000);


module.exports = function(deployer) {
  // deployer.deploy(Treasury);
  deployer.deploy(DummyToken);
  deployer.deploy(Masonry);
  deployer.deploy(TBond);
  deployer.deploy(TShare, startTime , "0xeDFDA8DB4a16e1065E8324fA60f1c6eeBccd6783", "0x56722dd61D8616071907005b483529d1eb62F46b");
  deployer.deploy(Tomb, 1000 /* 10% tax rate */, "0x446cACaBFF2b1A98a195f6532aAD9184619d41da");
  deployer.deploy(Timelock, "0x6263Ba54a296d48092D7b3542DE6e4674e2F3E6C", day);
  deployer.deploy(TaxOffice, Tomb.address);
};
