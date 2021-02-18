import React from 'react'
import Link from '@material-ui/core/Link'
import styles from './styles.module.scss'

const VehiclesCard = ({ history, vehicles = {} }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{vehicles.name}</h2>
        <p className={styles.cardText}>{`Model: ${vehicles.model}`}</p>
        <p className={styles.cardText}>{`Vehicle class: ${vehicles.vehicleClass}`}</p>
        <p className={styles.cardText}>{`Manufacturer: ${vehicles.manufacturer}`}</p>
        <p className={styles.cardText}>{`Length: ${vehicles.length}`}</p>
        <p className={styles.cardText}>{`Crew: ${vehicles.crew}`}</p>
        <p className={styles.cardText}>{`Cost credits: ${vehicles.costCredits}`}</p>
        <p className={styles.cardText}>{`Passengers: ${vehicles.passengers}`}</p>
        <p className={styles.cardText}>{`Cargo capacity: ${vehicles.cargoCapacity}`}</p>
        <p className={styles.cardText}>{`Consumables: ${vehicles.consumables}`}</p>
      </div>
      <div className={styles.cardAction}>
        <Link onClick={() => history.goBack()}>Back</Link>
      </div>
    </div>
  )
}

export default VehiclesCard
