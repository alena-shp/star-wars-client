import React from 'react'
import Link from '@material-ui/core/Link'
import styles from './styles.module.scss'

const FilmCard = ({ history, film = {} }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{film.name}</h2>
        <p className={styles.cardText}>{`Director: ${film.director}`}</p>
        <p className={styles.cardText}>{`Producer: ${film.producer}`}</p>
        <p className={styles.cardText}>{`Release date: ${film.releaseDate}`}</p>
      </div>
      <div className={styles.cardAction}>
        <Link onClick={() => history.goBack()}>Back</Link>
      </div>
    </div>
  )
}

export default FilmCard
