class Registration {
  constructor(status, firstAt) {
    this.status = status;
    this.firstAt = firstAt;
  }
}

class RegistrationBuilder {
  constructor() {
    this.status = null;
    this.firstAt = null;
  }

  withStatus(status) {
    this.status = status;
    return this;
  }

  withFirstAt(firstAt) {
    this.firstAt = firstAt;
    return this;
  }

  build() {
    return new Registration(
      this.status,
      this.firstAt
    );
  }
}

module.exports = {
  Registration: Registration,
  RegistrationBuilder: RegistrationBuilder
};
