module.exports.Engine = function Engine(cubicCapacity, fuel) {
  this.cubicCapacity = cubicCapacity;
  this.fuel = fuel;

  this.getCubicCapacity = function () {
    return this.cubicCapacity;
  };

  this.getFuel = function () {
    return this.fuel;
  };
};
