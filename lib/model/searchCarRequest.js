var SearchCarRequest = function SearchCarRequest(plate, vin, firstRegistrationDate, country) {
  this.plate = plate;
  this.vin = vin;
  this.firstRegistrationDate = firstRegistrationDate;
  this.country = country;

  this.getPlate = function () {
    return this.plate;
  };

  this.getVin = function () {
    return this.vin;
  };

  this.getFirstRegistrationDate = function () {
    return this.firstRegistrationDate;
  };

  this.getCountry = function () {
    return this.country;
  };
};


var SearchCarRequestBuilder = function SearchCarRequestBuilder() {
  this.plate = null;
  this.vin = null;
  this.firstRegistrationDate = null;
  this.country = null;

  var self = this;

  this.withPlate = function (plate) {
    self.plate = plate;
    return self;
  };

  this.withVin = function (vin) {
    self.vin = vin;
    return self;
  };

  this.withFirstRegistrationDate = function (firstRegistrationDate) {
    self.firstRegistrationDate = firstRegistrationDate;
    return self;
  };

  this.withCountry = function (country) {
    self.country = country;
    return self;
  };

  this.build = function () {
    return new SearchCarRequest(self.plate, self.vin, self.firstRegistrationDate, self.country);
  };

};

module.exports = exports = {
  SearchCarRequest: SearchCarRequest,
  SearchCarRequestBuilder: SearchCarRequestBuilder
};