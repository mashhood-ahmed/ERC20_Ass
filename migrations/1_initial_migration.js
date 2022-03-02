const SMUToken = artifacts.require("SMUToken");

module.exports = function (deployer) {
  deployer.deploy(SMUToken);
};
