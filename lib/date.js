const moment = require('moment');

const parseIsoString = function parseIsoString(dateStr, formats = ["dd.MM.yyyy", "yyyy-MM-dd"]) {
  const date = moment(dateStr, formats);

  if (date.isValid()) {
    return date.toISOString();
  }

  return null;
};

module.exports = {
  parseIsoString: parseIsoString
};