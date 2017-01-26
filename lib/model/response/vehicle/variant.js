class Variant {
  constructor(type, kind) {
    this.type = type;
    this.kind = kind;
  }
}

class VariantBuilder {
  constructor() {
    this.type = null;
    this.kind = null;
  }

  withType(type) {
    this.type = type;
    return this;
  }

  withKind(kind) {
    this.kind = kind;
    return this;
  }

  build() {
    return new Variant(
      this.type,
      this.kind
    );
  }
}

module.exports = {
  Variant: Variant,
  VariantBuilder: VariantBuilder
};
