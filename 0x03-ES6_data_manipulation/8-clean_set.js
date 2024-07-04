/**
 * Joins a set of strings with a dash after stripping the strings of
 */

export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  let resultArray = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        resultArray.push(valueSubStr);
      }
    }
  }
  return resultArray.join("-");
}
