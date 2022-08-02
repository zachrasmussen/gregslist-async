import { House } from "../Models/House.js"

export function getHouseForm(house = new House({})) {
    let submitAction = 'app.housesController.createHouse()'
    if (house.id) {
        submitAction = `app.housesController.editHouse('${house.id}')`
    }
    return `
    <form class="col-10 bg-white p-3 elevation-2" onsubmit="${submitAction}">
    <h3 class="text-primary">List Your House</h3>
    <div class="row">
      <div class="col-6">
        <label class="form-label" for="bedroom">Bedroom</label>
        <input class="form-control" type="number" id="bedrooms" name="${house.bedroom}">
      </div>
      <div class="col-6">
        <label class="form-label" for="bathroom">Bathroom</label>
        <input class="form-control" type="number" id="bathrooms" name="${house.bathroom}">
      </div>
      <div class="col-6">
        <label class="form-label" for="level">Level</label>
        <input class="form-control" type="number" id="levels" name="${house.level}">
      </div>
      <div class="col-6">
        <label class="form-label" for="img">Image Url</label>
        <input class="form-control" type="text" min="1" id="imgUrl" name="${house.imgUrl}">
      </div>
      <div class="col-6">
        <label class="form-label" for="year">Year</label>
        <input class="form-control" type="text" id="year" name="${house.year}">
      </div>
      <div class="col-6">
        <label class="form-label" for="price">Price</label>
        <input class="form-control" type="text" id="price" name="${house.price}">
      </div>
      <div class="col-12">
        <label class="form-label" for="description">Description</label>
        <textarea class="w-100 form-control" name="description" id="description" rows="5" value="${house.description}"></textarea>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
      </div>
    </div>
  </form>
    `
}