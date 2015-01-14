module.exports.Mileage = function Mileage(value, type) {
  this.value = value;
  this.type = type;

  this.getValue = function () {
    return this.value;
  };

  this.getType = function () {
    return this.type;
  };
};