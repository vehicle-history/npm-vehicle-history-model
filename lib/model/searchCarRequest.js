module.exports.SearchCarRequest = function SearchCarRequest(plate, vin, firstRegistrationDate) {
  this.plate = plate;
  this.vin = vin;
  this.firstRegistrationDate = firstRegistrationDate;

  this.getPlate = function () {
    return this.plate;
  };

  this.getVin = function () {
    return this.vin;
  };

  this.getFirstRegistrationDate = function () {
    return this.firstRegistrationDate;
  };

};