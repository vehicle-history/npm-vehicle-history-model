class Inspection {
  constructor(status) {
    this.status = status;
  }
}

class InspectionBuilder {
  constructor() {
    this.status = null;
  }

  withStatus(status) {
    this.status = status;
    return this;
  }

  build() {
    return new Inspection(
      this.status
    );
  }
}

module.exports = {
  Inspection: Inspection,
  InspectionBuilder: InspectionBuilder
};
