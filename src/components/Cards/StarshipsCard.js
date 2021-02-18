import React from 'react'
import Link from '@material-ui/core/Link'
import styles from './styles.module.scss'

const StarshipsCard = ({ history, starship = {} }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{starship.name}</h2>
        <p className={styles.cardText}>{`Model: ${starship.model}`}</p>
        <p className={styles.cardText}>{`Manufacturer: ${starship.manufacturer}`}</p>
        <p className={styles.cardText}>{`Cost in credits: ${starship.costInCredits}`}</p>
        <p className={styles.cardText}>{`Length: ${starship.length}`}</p>
        <p className={styles.cardText}> {`Crew: ${starship.crew}`}</p>
        <p className={styles.cardText}>{`Passengers: ${starship.passengers}`}</p>
        <p className={styles.cardText}>{`Cargo capacity: ${starship.cargoCapacity}`}</p>
      </div>
      <div className={styles.cardAction}>
        <Link onClick={() => history.goBack()}>Back</Link>
      </div>
    </div>
  )
}

export default StarshipsCard
