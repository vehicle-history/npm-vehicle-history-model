var Report = function Report(car, events) {
  this.car = car;
  this.events = events;
};

var ReportBuilder = function ReportBuilder() {
  this.car = null;
  this.events = null;

  var self = this;

  this.withCar = function (car) {
    self.car = car;
    return self;
  };

  this.withEvents = function (events) {
    self.events = events;
    return self;
  };

  this.build = function () {
    return new Report(self.car, self.events);
  };

};

module.exports = exports = {
  Report: Report,
  ReportBuilder: ReportBuilder
};
