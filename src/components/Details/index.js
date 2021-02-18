import React from 'react'
import { useSelector } from 'react-redux'
import {
  FilmCard,
  PeopleCard,
  PlanetsCard,
  SpeciesCard,
  StarshipsCard,
  VehiclesCard
} from 'components/Cards'

const Details = ({ match, history }) => {
  const name = match.params.name
  const id = match.params.id
  const searchData = useSelector(state => {
    const resource = state.searchData[name]
    return resource && resource.filter(item => item.id === id)
  })

  const content = () => {
    switch (name) {
      case 'films':
        return (
          searchData &&
          searchData.map(details => {
            return (
              <div key={details.id}>
                <FilmCard history={history} film={details} />
              </div>
            )
          })
        )
      case 'people':
        return (
          searchData &&
          searchData.map(details => {
            return (
              <div key={details.id}>
                <PeopleCard history={history} people={details} />
              </div>
            )
          })
        )
      case 'planets':
        return (
          searchData &&
          searchData.map(details => {
            return (
              <div key={details.id}>
                <PlanetsCard history={history} planet={details} />
              </div>
            )
          })
        )
      case 'species':
        return (
          searchData &&
          searchData.map(details => {
            return (
              <div key={details.id}>
                <SpeciesCard history={history} species={details} />
              </div>
            )
          })
        )
      case 'starships':
        return (
          searchData &&
          searchData.map(details => {
            return (
              <div key={details.id}>
                <StarshipsCard history={history} starship={details} />
              </div>
            )
          })
        )
      case 'vehicles':
        return (
          searchData &&
          searchData.map(details => {
            return (
              <div key={details.id}>
                <VehiclesCard history={history} vehicles={details} />
              </div>
            )
          })
        )
      default:
        return <h1>No resources</h1>
    }
  }

  return <div>{content()}</div>
}

export default Details
