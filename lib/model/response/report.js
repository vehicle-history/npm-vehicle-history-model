var Report = function Report(vehicle, events) {
  this.vehicle = vehicle;
  this.events = events;
};

var ReportBuilder = function ReportBuilder() {
  this.vehicle = null;
  this.events = null;

  var self = this;

  this.withVehicle = function (vehicle) {
    self.vehicle = vehicle;
    return self;
  };

  this.withEvents = function (events) {
    self.events = events;
    return self;
  };

  this.build = function () {
    return new Report(self.vehicle, self.events);
  };

};

module.exports = {
  Report: Report,
  ReportBuilder: ReportBuilder
};
