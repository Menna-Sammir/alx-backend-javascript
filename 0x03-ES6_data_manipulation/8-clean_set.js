/**
 * Joins a set of strings with a dash after stripping the strings of
 */

export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  let resultArray = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      resultArray.push(value.substring(startString.length));
    }
  });
  return resultArray.join("-");
}
