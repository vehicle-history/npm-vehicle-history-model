module.exports.Policy = function Policy(status) {
  this.status = status;

  this.getStatus = function () {
    return this.status;
  };
};

