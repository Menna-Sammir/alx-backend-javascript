/**
 * Joins a set of strings with a dash after stripping the strings of
 */

export default function cleanSet(valuesSet, startString) {
  if (startString === '') {
    return '';
  }
  let resultArray = [];

  valuesSet.forEach((value) => {
    if (value.startsWith(startString)) {
      resultArray.push(value.substring(startString.length));
    }
  });
  return resultArray.join("-");
}
