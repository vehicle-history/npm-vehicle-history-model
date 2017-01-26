class SearchCarRequest {
  constructor(plate, vin, firstRegistrationDate, country) {
    this.plate = plate;
    this.vin = vin;
    this.firstRegistrationDate = firstRegistrationDate;
    this.country = country;
  }

  getPlate() {
    return this.plate;
  }

  getVin() {
    return this.vin;
  }

  getFirstRegistrationDate() {
    return this.firstRegistrationDate;
  }

  getCountry() {
    return this.country;
  }
}

class SearchCarRequestBuilder {
  constructor() {
    this.plate = null;
    this.vin = null;
    this.firstRegistrationDate = null;
    this.country = null;
  }

  withPlate(plate) {
    this.plate = plate;
    return this;
  }

  withVin(vin) {
    this.vin = vin;
    return this;
  }

  withFirstRegistrationDate(firstRegistrationDate) {
    this.firstRegistrationDate = firstRegistrationDate;
    return this;
  }

  withCountry(country) {
    this.country = country;
    return this;
  }

  build() {
    return new SearchCarRequest(this.plate, this.vin, this.firstRegistrationDate, this.country);
  }
}

module.exports = {
  SearchCarRequest: SearchCarRequest,
  SearchCarRequestBuilder: SearchCarRequestBuilder
};
