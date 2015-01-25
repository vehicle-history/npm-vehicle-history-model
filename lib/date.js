require('datejs');
Date.i18n.setLanguage('en-US');

var exports = {};

exports.parseIsoString = function (dateStr) {

  var date = Date.parse(dateStr);
  if (date) {
    return date.toISOString(dateStr);
  }

  return null;
};

module.exports = exports;