module.exports.Registration = function Registration(status, firstAt) {
  this.status = status;
  this.firstAt = firstAt;

  this.getStatus = function () {
    return this.status;
  };

  this.getFirstAt = function () {
    return this.firstAt;
  };
};
