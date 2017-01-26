class Name {
  constructor(make, name, model) {
    this.make = make;
    this.name = name;
    this.model = model;
  }
}

class NameBuilder {
  constructor() {
    this.make = null;
    this.name = null;
    this.model = null;
  }

  withMake(make) {
    this.make = make;
    return this;
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withModel(model) {
    this.model = model;
    return this;
  }

  build() {
    return new Name(
      this.make,
      this.name,
      this.model
    );
  }
}

module.exports = {
  Name: Name,
  NameBuilder: NameBuilder
};
