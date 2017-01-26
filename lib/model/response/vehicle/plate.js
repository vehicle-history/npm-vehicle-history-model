class Plate {
  constructor(value, country) {
    this.value = value;
    this.country = country;
  }
}

class PlateBuilder {
  constructor() {
    this.value = null;
    this.country = null;
  }

  withValue(value) {
    this.value = value;
    return this;
  }

  withCountry(country) {
    this.country = country;
    return this;
  }

  build() {
    return new Plate(
      this.value,
      this.country
    );
  }
}

module.exports = {
  Plate: Plate,
  PlateBuilder: PlateBuilder
};
