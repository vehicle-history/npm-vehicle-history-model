var Mileage = function Mileage(value, type) {
  this.value = value;
  this.type = type;
};

var MileageBuilder = function MileageBuilder() {
  this.value = null;
  this.type = null;

  var self = this;

  this.withValue = function (value) {
    self.value = value;
    return self;
  };

  this.withType = function (type) {
    self.type = type;
    return self;
  };

  this.build = function () {
    return new Mileage(self.value, self.type);
  };

};

module.exports = {
  Mileage: Mileage,
  MileageBuilder: MileageBuilder
};
