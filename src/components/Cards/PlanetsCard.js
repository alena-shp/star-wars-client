import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const PlanetsCard = ({ history, planet = {} }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {`Name: ${planet.name}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Population: ${planet.population}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Rotation period: ${planet.rotationPeriod}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Diameter: ${planet.diameter}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Link onClick={() => history.goBack()}>Back</Link>
      </CardActions>
    </Card>
  )
}

export default PlanetsCard
