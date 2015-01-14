module.exports.Production = function Production(year) {
  this.year = year;

  this.getYear = function () {
    return this.year;
  };
};
