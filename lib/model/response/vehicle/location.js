var Location = function Location(state, country) {
  this.state = state;
  this.country = country;
};

var LocationBuilder = function LocationBuilder() {
  this.state = null;
  this.country = null;

  var self = this;

  this.withState = function (state) {
    self.state = state;
    return self;
  };

  this.withCountry = function (country) {
    self.country = country;
    return self;
  };

  this.build = function () {
    return new Location(self.state, self.country);
  };

};

module.exports = {
  Location: Location,
  LocationBuilder: LocationBuilder
};
