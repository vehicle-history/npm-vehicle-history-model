class Engine {
  constructor(cubicCapacity, fuel) {
    this.cubicCapacity = cubicCapacity;
    this.fuel = fuel;
  }
}

class EngineBuilder {
  constructor() {
    this.cubicCapacity = null;
    this.fuel = null;
  }

  withCubicCapacity(cubicCapacity) {
    this.cubicCapacity = cubicCapacity;
    return this;
  }

  withFuel(fuel) {
    this.fuel = fuel;
    return this;
  }

  build() {
    return new Engine(
      this.cubicCapacity,
      this.fuel
    );
  }
}

module.exports = {
  Engine: Engine,
  EngineBuilder: EngineBuilder
};
