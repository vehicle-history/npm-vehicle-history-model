module.exports.Variant = function Variant(type, kind) {
  this.type = type;
  this.kind = kind;

  this.getType = function () {
    return this.type;
  };

  this.getKind = function () {
    return this.kind;
  };
};
