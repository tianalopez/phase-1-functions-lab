// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance) {
  return Math.abs(distance - 42) * 264;
}

function distanceTravelledInFeet(dist1, dist2) {
 return Math.abs(dist2 - dist1) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  switch(true) {
    case (distance < 400):
      return 0;
      break;
    case (distance > 400 && distance < 2000):
      return ((distance-400) * 2) / 100;
      break;
    case (distance > 2000 && distance < 2500):
      return 25;
      break;
    default:
      return "cannot travel that far";
  }
}
