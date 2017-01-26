require('datejs');
Date.i18n.setLanguage('en-US');

const parseIsoString = function parseIsoString(dateStr, formats = ["dd.MM.yyyy", "yyyy-MM-dd"]) {
  const date = Date.parseExact(dateStr, formats);

  if (date) {
    return date.toISOString(dateStr);
  }

  return null;
};

module.exports = {
  parseIsoString: parseIsoString
};