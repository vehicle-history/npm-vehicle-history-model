require('datejs');
Date.i18n.setLanguage('en-US');

var exports = {};

exports.parseIsoString = function (dateStr, format) {

  format = format || null;
  var date = null;

  if (format) {
    date = Date.parseExact(dateStr, format);
  }
  else {
    date = Date.parse(dateStr);
  }

  if (date) {
    return date.toISOString(dateStr);
  }

  return null;
};

module.exports = exports;