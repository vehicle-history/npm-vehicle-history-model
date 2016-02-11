var Plate = function Plate(value, country) {
  this.value = value;
  this.country = country;
};

var PlateBuilder = function PlateBuilder() {
  this.value = null;
  this.country = null;

  var self = this;

  this.withValue = function (value) {
    self.value = value;
    return self;
  };

  this.withCountry = function (country) {
    self.country = country;
    return self;
  };

  this.build = function () {
    return new Plate(self.value, self.country);
  };

};

module.exports = {
  Plate: Plate,
  PlateBuilder: PlateBuilder
};
