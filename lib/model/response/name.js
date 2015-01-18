module.exports.Name = function Name(make, name, model) {
  this.make = make;
  this.name = name;
  this.model = model;

  this.getManufacturer = function () {
    return this.make;
  };

  this.getName = function () {
    return this.name;
  };

  this.getModel = function () {
    return this.model;
  };

};