import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const SpeciesCard = ({ history, species = {} }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {`Name: ${species.name}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Classification: ${species.classification}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Designation: ${species.designation}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Average lifespan: ${species.averageLifespan}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Average height: ${species.averageHeight}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Eye colors: ${species.eyeColors}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Hair colors: ${species.hairColors}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Skin colors: ${species.skinColors}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Language: ${species.language}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Link onClick={() => history.goBack()}>Back</Link>
      </CardActions>
    </Card>
  )
}

export default SpeciesCard
