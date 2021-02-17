import axios from 'axios'

export default class swapiProvider {
  _nameUrl = 'https://swapi.dev/api'

  getAnswer = async url => {
    const res = await axios(`${this._nameUrl}${url}`)
    return await res.data
  }

  getFilms = async valueSearch => {
    const res = await this.getAnswer(`/films/?search=${valueSearch}`)
    return res.results.map(this._transformFilm)
  }

  getPeople = async valueSearch => {
    const res = await this.getAnswer(`/people/?search=${valueSearch}`)
    return res.results.map(this._transformPerson)
  }

  getPlanets = async valueSearch => {
    const res = await this.getAnswer(`/planets/?search=${valueSearch}`)
    return res.results.map(this._transformPlanets)
  }

  getSpecies = async valueSearch => {
    const res = await this.getAnswer(`/species/?search=${valueSearch}`)
    return res.results.map(this._transformSpecies)
  }

  getStarships = async valueSearch => {
    const res = await this.getAnswer(`/starships/?search=${valueSearch}`)
    return res.results.map(this._transformStarship)
  }

  getVehicles = async valueSearch => {
    const res = await this.getAnswer(`/vehicles/?search=${valueSearch}`)
    return res.results.map(this._transformVehicles)
  }

  getIdItem = item => {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  _transformFilm = film => {
    return {
      id: this.getIdItem(film),
      title: film.title,
      director: film.director,
      producer: film.producer,
      releaseDate: film.release_date
    }
  }

  _transformPerson = person => {
    return {
      id: this.getIdItem(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      hairColor: person.hair_color,
      height: person.height,
      mass: person.mass,
      skinColor: person.skin_color
    }
  }

  _transformPlanets = planet => {
    return {
      id: this.getIdItem(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformSpecies = species => {
    return {
      id: this.getIdItem(species),
      name: species.name,
      classification: species.classification,
      designation: species.designation,
      averageLifespan: species.average_lifespan,
      averageHeight: species.average_height,
      eyeColors: species.eye_colors,
      hairColors: species.hair_colors,
      skinColors: species.skin_colors,
      language: species.language
    }
  }

  _transformStarship = starship => {
    return {
      id: this.getIdItem(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }

  _transformVehicles = vehicles => {
    return {
      id: this.getIdItem(vehicles),
      name: vehicles.name,
      model: vehicles.model,
      vehicleClass: vehicles.vehicle_class,
      manufacturer: vehicles.manufacturer,
      length: vehicles.length,
      costCredits: vehicles.cost_in_credits,
      crew: vehicles.crew,
      passengers: vehicles.passengers,
      cargoCapacity: vehicles.cargo_capacity,
      consumables: vehicles.consumables
    }
  }
}
