
export class House {
  constructor({ id, bedrooms, bathrooms, levels, imgUrl, year, price, description }) {
    this.id = id
    this.bedrooms = bedrooms || ''
    this.bathrooms = bathrooms || ''
    this.levels = levels || ''
    this.imgUrl = imgUrl || ''
    this.year = year || ''
    this.price = price || ''
    this.description = description || ''
  }

  get Template() {
    return `
        <div class="col-4 p-3">
            <div class="bg-white elevation-2">
                <img class="img-fluid" src="${this.imgUrl}" alt="">
                <div class="p-2"> 
                    <h4 class="text-center">${this.bedrooms} Bed | ${this.bathrooms} Bath | ${this.levels} Level</h4>
                    <h4 class="text-center">Year Built: ${this.year} | $${this.price}</h4>
                    <div class="d-flex justify-content-center">
                      <p class="text-end text-success m-0"><b>About the house: </b>${this.description}</p>
                    </div>
                    <section class="py-3">
                      <div class="d-flex justify-content-evenly">
                        <button class="btn btn-info" onclick="app.housesController.adjustHouse('${this.id}')">Adjust House Settings</button>
                        <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">delete me</button>
                      </div>
                    </section>
                </div>
            </div>
        </div> `
  }
}

