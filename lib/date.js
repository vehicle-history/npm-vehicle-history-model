const moment = require('moment');

const parseIsoString = function parseIsoString(dateStr, formats = ["DD.MM.YYYY"]) {
  const date = moment(dateStr, formats);

  if (date.isValid()) {
    return date.toISOString();
  }

  return null;
};

module.exports = {
  parseIsoString: parseIsoString
};