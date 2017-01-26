class Policy {
  constructor(status) {
    this.status = status;
  }
}

class PolicyBuilder {
  constructor() {
    this.status = null;
  }

  withStatus(status) {
    this.status = status;
    return this;
  }

  build() {
    return new Policy(
      this.status
    );
  }
}

module.exports = {
  Policy: Policy,
  PolicyBuilder: PolicyBuilder
};
