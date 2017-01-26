const AbstractEnum = {
  getValue: function getValue(value, variants) {
    if (value) {
      value = value.toLowerCase();

      for (const i in variants) {
        if (variants.hasOwnProperty(i)) {
          const variant = variants[i];

          for (const j in variant.values) {
            if (variant.values.hasOwnProperty(j)) {
              const val = variant.values[j];

              if (val.toLowerCase() === value) {
                return variant.name;
              }
            }
          }
        }
      }

      return null;
    }
  }
};

module.exports = {
  AbstractEnum: AbstractEnum
};