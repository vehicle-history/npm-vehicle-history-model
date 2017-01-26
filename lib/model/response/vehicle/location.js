class Location {
  constructor(country, state) {
    this.country = country;
    this.state = state;
  }
}

class LocationBuilder {
  constructor() {
    this.country = null;
    this.state = null;
  }

  withCountry(country) {
    this.country = country;
    return this;
  }

  withState(state) {
    this.state = state;
    return this;
  }

  build() {
    return new Location(
      this.country,
      this.state
    );
  }
}

module.exports = {
  Location: Location,
  LocationBuilder: LocationBuilder
};
