import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { House } from "../Models/House.js";



export function saveState() {
  console.log('saving');
  let carData = JSON.stringify(ProxyState.cars)
  localStorage.setItem('cars', carData)
  console.log('saving');
  let houseData = JSON.stringify(ProxyState.houses)
  localStorage.setItem('houses', houseData)
}

export function loadState() {
  console.log('loading')
  let rawCars = localStorage.getItem('cars')
  if (rawCars) {
    let carData = JSON.parse(rawCars)
    console.log(carData);
    ProxyState.cars = carData.map(c => new Car(c))
    console.log('loading')
    let rawHouses = localStorage.getItem('houses')
    if (rawHouses) {
      let houseData = JSON.parse(rawHouses)
      console.log(houseData);
      ProxyState.houses = houseData.map(h => new House(h))
    }
  }


}
