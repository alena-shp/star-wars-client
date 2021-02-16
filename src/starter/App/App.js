import React from 'react'
import Typography from '@material-ui/core/Typography'
import InputSearch from 'components/InputSearch'
import ListCards from 'components/ListCards'

import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Typography variant="h3" align="center" color="primary" gutterBottom>
        Star Wars Client
      </Typography>
      <InputSearch />
      <ListCards />
    </div>
  )
}

export default App
