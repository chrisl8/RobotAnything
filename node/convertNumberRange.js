function convertNumberRange(oldValue, oldMin, oldMax, newMin, newMax) {
  return ((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin;
}

module.exports = convertNumberRange;
