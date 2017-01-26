const assert = require('assert-plus');
const carMileageBuilder = require('../../builder/vehicle/mileageBuilder');
const carMileageResolver = require('../../resolver/vehicle/carMileageResolver');

const resolve = function resolve(event, options) {
  assert.object(event, 'event');
  assert.object(options, 'options');

  if (!event.mileage) {
    return null;
  }

  const map = new Map();
  map[carMileageResolver.MILEAGE_VALUE_MAP_FIELD] = event.mileage;
  carMileageResolver.resolve(map, options);
  return carMileageBuilder.build(map);
};

module.exports = {
  resolve: resolve
};
