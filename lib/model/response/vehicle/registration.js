var Registration = function Registration(status, firstAt) {
  this.status = status;
  this.firstAt = firstAt;
};

var RegistrationBuilder = function RegistrationBuilder() {
  this.status = null;
  this.firstAt = null;

  var self = this;

  this.withStatus = function (status) {
    self.status = status;
    return self;
  };

  this.withFirstAt = function (firstAt) {
    self.firstAt = firstAt;
    return self;
  };

  this.build = function () {
    return new Registration(self.status, self.firstAt);
  };

};

module.exports = exports = {
  Registration: Registration,
  RegistrationBuilder: RegistrationBuilder
};
