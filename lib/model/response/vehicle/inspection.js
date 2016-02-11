var Inspection = function Inspection(status) {
  this.status = status;
};

var InspectionBuilder = function InspectionBuilder() {
  this.status = null;

  var self = this;

  this.withStatus = function (status) {
    self.status = status;
    return self;
  };

  this.build = function () {
    return new Inspection(self.status);
  };

};

module.exports = {
  Inspection: Inspection,
  InspectionBuilder: InspectionBuilder
};
