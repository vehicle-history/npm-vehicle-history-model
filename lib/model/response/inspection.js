module.exports.Inspection = function Inspection(status) {
  this.status = status;

  this.getStatus = function () {
    return this.status;
  };
};
