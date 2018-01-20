module.exports = function getPositiveKeysOfBoolset(boolset) {
  return boolset.filter((item, index, arr) => index % 2 == 0 && arr[index + 1]);
}
