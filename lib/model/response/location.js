module.exports.Location = function Location(state, country) {
  this.state = state;
  this.country = country;

  this.getState = function () {
    return this.state;
  };

  this.getCountry = function () {
    return this.country;
  };

};