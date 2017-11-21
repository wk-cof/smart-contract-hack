var SimpleStudy = artifacts.require("./SimpleStudy.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStudy);
};
