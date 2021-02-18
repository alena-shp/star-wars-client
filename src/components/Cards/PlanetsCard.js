import React from 'react'
import Link from '@material-ui/core/Link'
import styles from './styles.module.scss'

const PlanetsCard = ({ history, planet = {} }) => {
  return
  ;<div className={styles.card}>
    <div className={styles.cardContent}>
      <h2 className={styles.cardTitle}>{planet.name}</h2>
      <p className={styles.cardText}>{`Population: ${planet.population}`}</p>
      <p className={styles.cardText}>{`Rotation period: ${planet.rotationPeriod}`}</p>
      <p className={styles.cardText}>{`Diameter: ${planet.diameter}`}</p>
    </div>
    <div className={styles.cardAction}>
      <Link onClick={() => history.goBack()}>Back</Link>
    </div>
  </div>
}

export default PlanetsCard
