const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];


const countriesLong = countries.filter(country => country.length >= 7);

console.log(countriesLong);

let scores = [56, 78, 95, 77, 65, 86];
let target = scores.indexOf(87);

console.log (target);


const points = [100,88,94,78,84,69];

function convertPointsToStatus(pointTotal) {
  let status = 'Not Complete';
  if (pointTotal >= 93) {
    status = 'Excellent';
  } else if (pointTotal >= 70) {
    status = 'Complete';
  }
  return status;
}

const statusReport = points.map(convertPointsToStatus);

console.log(statusReport);