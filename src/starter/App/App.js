import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import InputSearch from 'components/InputSearch'
import ListItems from 'components/ListItems'
import Details from 'components/Details'
import NotFound from 'components/NotFound'

import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Typography variant="h3" align="center" color="primary" gutterBottom>
        Star Wars Client
      </Typography>
      <InputSearch />
      <Switch>
        <Route path="/" component={ListItems} exact />
        <Route path="/details/:name/:id" component={Details} />
      </Switch>
    </div>
  )
}

export default App
