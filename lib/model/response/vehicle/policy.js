var Policy = function Policy(status) {
  this.status = status;
};

var PolicyBuilder = function PolicyBuilder() {
  this.status = null;

  var self = this;

  this.withStatus = function (status) {
    self.status = status;
    return self;
  };

  this.build = function () {
    return new Policy(self.status);
  };

};

module.exports = exports = {
  Policy: Policy,
  PolicyBuilder: PolicyBuilder
};

