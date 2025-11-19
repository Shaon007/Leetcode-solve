function ParkingSystem(big, medium, small) {
  this.spots = {
    1: big,
    2: medium,
    3: small
  };
}
ParkingSystem.prototype.addCar = function (carType) {
  if (this.spots[carType] > 0) {
    this.spots[carType]--;
    return true
  }
  return false
}
