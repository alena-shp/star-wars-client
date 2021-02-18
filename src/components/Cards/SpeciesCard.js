import React from 'react'
import Link from '@material-ui/core/Link'
import styles from './styles.module.scss'

const SpeciesCard = ({ history, species = {} }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{species.name}</h2>
        <p className={styles.cardText}>{`Classification: ${species.classification}`}</p>
        <p className={styles.cardText}>{`Designation: ${species.designation}`}</p>
        <p className={styles.cardText}>{`Average lifespan: ${species.averageLifespan}`}</p>
        <p className={styles.cardText}>{`Average height: ${species.averageHeight}`}</p>
        <p className={styles.cardText}>{`Eye colors: ${species.eyeColors}`}</p>
        <p className={styles.cardText}>{`Hair colors: ${species.hairColors}`}</p>
        <p className={styles.cardText}>{`Skin color: ${species.skinColor}`}</p>
        <p className={styles.cardText}>{`Language: ${species.language}`}</p>
      </div>
      <div className={styles.cardAction}>
        <Link onClick={() => history.goBack()}>Back</Link>
      </div>
    </div>
  )
}

export default SpeciesCard
