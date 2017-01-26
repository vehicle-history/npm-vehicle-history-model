class Production {
  constructor(year) {
    this.year = year;
  }
}

class ProductionBuilder {
  constructor() {
    this.year = null;
  }

  withYear(year) {
    this.year = year;
    return this;
  }

  build() {
    return new Production(
      this.year
    );
  }
}

module.exports = {
  Production: Production,
  ProductionBuilder: ProductionBuilder
};
