
function getNewCar() {
  var newCar = {
    city: 'Toronto',
    passengers: 0,
    gas: 100
  }
  return newCar;
}

function addCar(cars, newCar) {
  cars.push(newCar);
  return "Adding new car to fleet. Fleet size is now " + cars.length + ".";
}

function pickUpPassenger(car) {
  car.passenger += 1;
  car.gas -= 10;
  return "Picked up passenger. Car now has " + car.passenger + " passengers."
}

function getDestination(car) {
  if(car.city == 'Toronto') {
    return 'Mississauga';
  } else if(car.city == 'Mississauga') {
    return 'London';
  } else if(car.city == 'London') {
    return 'Toronto';
  }
}

function fillUpGas(car) {
  var oldGas = car.gas;
  car.gas = 100;
  return "Filled up to" + getGasDisplay(car.gas)
}

function drive(car, cityDistance) {
  if(car.gas < cityDistance) {
    return fillUpGas(car);
  }

  car.city = getDestination(car);
  car.gas -= cityDistance;

  return "Drove to " + car.city + " remaining gas: " + getGasDisplay(car.gas) + ".")
}

function dropOffPassenger(car) {
  var previousPassengers = car.passengers;
  car.passengers = 0;
  return "Dropped off " + previousPassengers + " passengers.";
}

function act(car) {
  var distanceBetweenCities = 50;

  if car.gas < 20 {
    return fillUpGas(car);
  } else if (car.passengers < 3) {
    return pickUpPassenger(car);
  } else {
    if(car.gas < distanceBetweenCities) {
      return fillUpGas(car);
    }
    var droveTo = drive(car, distanceBetweenCities);
    var passengersDropped = dropOffPassenger(car);

    return droveTo + passengerDropped;
  }
}

function commandFleet(cars) {
  for(var i = 0; i < cars.lengh; i++) {
    var action = act(cars[i]);
    console.log("Car" + (i+1) + ": " + action);
  }
  console.log("---");
}

function addOneCarPerDay(cars, numDays) {
  for(var i = 0; i < numDays; i++) {
    var newCar = getNewCar();
    console.log(addCar(cars, newCar));
    commandFleet(cars);
  }
}

var cars = [];
addOneCarPerDay(cars, 10)
