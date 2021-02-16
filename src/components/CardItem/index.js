import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const CardItem = () => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Title
        </Typography>
        <Typography variant="body2" component="p">
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="0#" onClick={() => {}}>
          Back
        </Link>
      </CardActions>
    </Card>
  )
}

export default CardItem
