var Production = function Production(year) {
  this.year = year;
};

var ProductionBuilder = function ProductionBuilder() {
  this.year = null;

  var self = this;

  this.withYear = function (year) {
    self.year = year;
    return self;
  };

  this.build = function () {
    return new Production(self.year);
  };

};

module.exports = exports = {
  Production: Production,
  ProductionBuilder: ProductionBuilder
};
