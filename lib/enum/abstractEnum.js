const AbstractEnum = {
  getValue: function getValue(value, variants) {
    if (value) {
      value = value.toLowerCase();

      for (const variant of variants) {
        for (const val of variant.values) {
          if (val.toLowerCase() === value) {
            return variant.name;
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