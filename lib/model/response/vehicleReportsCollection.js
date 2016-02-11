var VehicleReportsCollection = function VehicleReportsCollection(count, vehicleReports) {
  this.count = count;
  this.vehicleReports = vehicleReports;
};

var VehicleReportsCollectionBuilder = function VehicleReportsCollectionBuilder() {
  this.count = null;
  this.vehicleReports = null;

  var self = this;

  this.withCount = function (count) {
    self.count = count;
    return self;
  };

  this.withVehicleReports = function (vehicleReports) {
    self.vehicleReports = vehicleReports;
    return self;
  };

  this.build = function () {
    return new VehicleReportsCollection(self.count, self.vehicleReports);
  };

};

module.exports = exports = {
  VehicleReportsCollection: VehicleReportsCollection,
  VehicleReportsCollectionBuilder: VehicleReportsCollectionBuilder
};
