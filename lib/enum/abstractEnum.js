var exports = {};

exports.AbstractEnum = {
  getValue: function getValue(value, variants) {
    if (value) {
      value = value.toLowerCase();

      for (var i in variants) {
        if (variants.hasOwnProperty(i)) {
          var variant = variants[i];

          for (var j in variant.values) {
            if (variant.values.hasOwnProperty(j)) {
              var val = variant.values[j];

              if (val === value) {
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

module.exports = exports;