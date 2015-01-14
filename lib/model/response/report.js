module.exports.Report = function Report(car) {
  this.car = car;

  this.getCar = function () {
    return this.car;
  };
};
