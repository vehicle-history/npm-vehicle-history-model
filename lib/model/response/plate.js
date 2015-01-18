module.exports.Plate = function Plate(value, country) {
  this.value = value;
  this.country = country;

  this.getValue = function () {
    return this.value;
  };

  this.getCountry = function () {
    return this.country;
  };
};