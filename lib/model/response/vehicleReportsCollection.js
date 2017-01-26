class VehicleReportsCollection {
  constructor(count, vehicleReports) {
    this.count = count;
    this.vehicleReports = vehicleReports;
  }
}

class VehicleReportsCollectionBuilder {
  constructor() {
    this.count = null;
    this.vehicleReports = null;
  }

  withCount(count) {
    this.count = count;
    return this;
  }

  withVehicleReports(vehicleReports) {
    this.vehicleReports = vehicleReports;
    return this;
  }

  build() {
    return new VehicleReportsCollection(
      this.count,
      this.vehicleReports
    );
  }
}

module.exports = {
  VehicleReportsCollection: VehicleReportsCollection,
  VehicleReportsCollectionBuilder: VehicleReportsCollectionBuilder
};
