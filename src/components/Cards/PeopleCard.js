import React from 'react'
import Link from '@material-ui/core/Link'
import styles from './styles.module.scss'

const PeopleCard = ({ history, people = {} }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{people.name}</h2>
        <p className={styles.cardText}>{`Gender: ${people.gender}`}</p>
        <p className={styles.cardText}>{`Birth year: ${people.birthYear}`}</p>
        <p className={styles.cardText}>{`Eye color: ${people.eyeColor}`}</p>
        <p className={styles.cardText}> {`Hair color: ${people.hairColor}`}</p>
        <p className={styles.cardText}>{`Height: ${people.height}`}</p>
        <p className={styles.cardText}>{`Mass: ${people.mass}`}</p>
        <p className={styles.cardText}>{`Skin color: ${people.skinColor}`}</p>
      </div>
      <div className={styles.cardAction}>
        <Link onClick={() => history.goBack()}>Back</Link>
      </div>
    </div>
  )
}

export default PeopleCard
