import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const StarshipsCard = ({ history, starship = {} }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {`Name: ${starship.name}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Model: ${starship.model}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Manufacturer: ${starship.manufacturer}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Cost in credits: ${starship.costInCredits}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Length: ${starship.length}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Crew: ${starship.crew}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Passengers: ${starship.passengers}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Cargo capacity: ${starship.cargoCapacity}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Link onClick={() => history.goBack()}>Back</Link>
      </CardActions>
    </Card>
  )
}

export default StarshipsCard
