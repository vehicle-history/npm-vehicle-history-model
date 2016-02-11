require('datejs');
Date.i18n.setLanguage('en-US');

var parseIsoString = function parseIsoString(dateStr, formats) {
  formats = formats || ["dd.MM.yyyy", "yyyy-MM-dd"];

  var date = Date.parseExact(dateStr, formats);

  if (date) {
    return date.toISOString(dateStr);
  }

  return null;
};

module.exports = {
  parseIsoString: parseIsoString
};