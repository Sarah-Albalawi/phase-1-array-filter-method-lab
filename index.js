// Code your solution here
function findMatching(str, driver) {
  return str.filter(
    (driverMatch) => driverMatch.toLowerCase() === driver.toLowerCase()
  );
}

function fuzzyMatch(str, testStr) {
  return str.filter(
    (driverMatch) =>
      driverMatch.toLowerCase().indexOf(testStr.toLowerCase()) === 0
  );
}

function matchName(str, driverName) {
  return str.filter((record) => record.name === driverName);
}
