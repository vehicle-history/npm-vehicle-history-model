var Engine = function Engine(cubicCapacity, fuel) {
  this.cubicCapacity = cubicCapacity;
  this.fuel = fuel;
};

var EngineBuilder = function EngineBuilder() {
  this.cubicCapacity = null;
  this.fuel = null;

  var self = this;

  this.withCubicCapacity = function (cubicCapacity) {
    self.cubicCapacity = cubicCapacity;
    return self;
  };

  this.withFuel = function (fuel) {
    self.fuel = fuel;
    return self;
  };

  this.build = function () {
    return new Engine(self.cubicCapacity, self.fuel);
  };

};

module.exports = {
  Engine: Engine,
  EngineBuilder: EngineBuilder
};
