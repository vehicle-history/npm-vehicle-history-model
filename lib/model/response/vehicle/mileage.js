class Mileage {
  constructor(value, type) {
    this.value = value;
    this.type = type;
  }
}

class MileageBuilder {
  constructor() {
    this.value = null;
    this.type = null;
  }

  withValue(value) {
    this.value = value;
    return this;
  }

  withType(type) {
    this.type = type;
    return this;
  }

  build() {
    return new Mileage(
      this.value,
      this.type
    );
  }
}

module.exports = {
  Mileage: Mileage,
  MileageBuilder: MileageBuilder
};
