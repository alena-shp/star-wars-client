import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const VehiclesCard = ({ history, vehicles = {} }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {`Name: ${vehicles.name}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Model: ${vehicles.model}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Vehicle class: ${vehicles.vehicleClass}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Manufacturer: ${vehicles.manufacturer}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Length: ${vehicles.length}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Crew: ${vehicles.crew}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Cost credits: ${vehicles.costCredits}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Passengers: ${vehicles.passengers}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Cargo capacity: ${vehicles.cargoCapacity}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Consumables: ${vehicles.consumables}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Link onClick={() => history.goBack()}>Back</Link>
      </CardActions>
    </Card>
  )
}

export default VehiclesCard
