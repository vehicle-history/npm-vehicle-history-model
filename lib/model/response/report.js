class Report {
  constructor(vehicle, events) {
    this.vehicle = vehicle;
    this.events = events;
  }
}

class ReportBuilder {
  constructor() {
    this.vehicle = null;
    this.events = null;
  }

  withVehicle(vehicle) {
    this.vehicle = vehicle;
    return this;
  }

  withEvents(events) {
    this.events = events;
    return this;
  }

  build() {
    return new Report(
      this.vehicle,
      this.events
    );
  }
}

module.exports = {
  Report: Report,
  ReportBuilder: ReportBuilder
};
