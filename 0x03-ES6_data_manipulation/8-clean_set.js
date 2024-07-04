/**
 * Joins a set of strings with a dash after stripping the strings of
 */

export default function cleanSet(valuesSet, startString) {
  const resultArray = Array.from(valuesSet)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length));
  return resultArray.join('-');
}
