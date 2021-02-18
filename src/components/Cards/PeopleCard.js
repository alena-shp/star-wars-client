import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const PeopleCard = ({ history, people = {} }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {`Name: ${people.name}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Gender: ${people.gender}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Birth year: ${people.birthYear}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Eye color: ${people.eyeColor}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Hair color: ${people.hairColor}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Height: ${people.height}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Mass: ${people.mass}`}
        </Typography>
        <Typography variant="body2" component="p">
          {`Skin color: ${people.skinColor}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Link onClick={() => history.goBack()}>Back</Link>
      </CardActions>
    </Card>
  )
}

export default PeopleCard
