var Name = function Name(make, name, model) {
  this.make = make;
  this.name = name;
  this.model = model;
};

var NameBuilder = function NameBuilder() {
  this.make = null;
  this.name = null;
  this.model = null;

  var self = this;

  this.withMake = function (make) {
    self.make = make;
    return self;
  };

  this.withName = function (name) {
    self.name = name;
    return self;
  };

  this.withModel = function (model) {
    self.model = model;
    return self;
  };

  this.build = function () {
    return new Name(self.make, self.name, self.model);
  };

};

module.exports = exports = {
  Name: Name,
  NameBuilder: NameBuilder
};