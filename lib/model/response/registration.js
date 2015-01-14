module.exports.Registration = function Registration(status) {
  this.status = status;

  this.getStatus = function () {
    return this.status;
  };
};
