module.exports.Name = function Name(manufacturer, name, model) {
  this.manufacturer = manufacturer;
  this.name = name;
  this.model = model;

  this.getManufacturer = function () {
    return this.manufacturer;
  };

  this.getName = function () {
    return this.name;
  };

  this.getModel = function () {
    return this.model;
  };

};