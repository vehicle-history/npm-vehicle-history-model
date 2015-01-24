module.exports.Report = function Report(car, events) {
  this.car = car;
  this.events = events;

  this.getCar = function () {
    return this.car;
  };

  this.getEvents = function () {
    return this.events;
  };
};
