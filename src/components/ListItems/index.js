import React from 'react'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Spinner from 'components/Spinner'
import styles from './styles.module.scss'

const ListItems = () => {
  const searchData = useSelector(state => state.searchData)
  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)
  const resources = Object.keys(searchData)

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <p>Sorry, something went wrong...</p>
  }

  //check the received data
  //if the object has keys - request is completed,
  //if the object has no properties - no data was found
  if (Object.keys(searchData).length !== 0 && Object.values(searchData).flat().length === 0) {
    return <p>Not found, try again</p>
  }

  return (
    <div className={styles.listItems}>
      {resources.map(resource => {
        return searchData[resource].map(item => {
          return (
            <div key={item.id} className={styles.item}>
              <Typography color="textSecondary">
                <Link to={`/details/${resource}/${item.id}`}>{item.name}</Link>
              </Typography>
              <Typography variant="body2" component="p" color="textPrimary">
                {resource}
              </Typography>
            </div>
          )
        })
      })}
    </div>
  )
}

export default ListItems
