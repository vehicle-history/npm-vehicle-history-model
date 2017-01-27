var moment = require('moment-timezone');
moment.tz.setDefault('Europe/Warsaw');

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