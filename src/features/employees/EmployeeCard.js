import React from 'react'
import iconPhone from 'assets/img/iconPhone.svg'
import iconEmail from 'assets/img/iconEmail.svg'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  card: {
    display: 'block',
    width: '300px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
    background: '#FFFFFF',
    borderRadius: '14px',
    margin: 'auto',
    padding: '24px',
    textAlign: 'center'
  },
  cardContent: {
    padding: '0 0 0 0'
  },
  image: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '24px',
    borderRadius: '26px'
  },
  name: {
    margin: 0,
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '34px',
    color: '#202020'
  },
  job: {
    marginBottom: '24px',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#A5A5A5'
  },
  contact: {
    textAlign: 'left'
  },
  contactItem: {
    paddingBottom: '12px'
  },
  contactIcon: {
    paddingRight: '12px'
  },
  contactText: {
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '19px'
  }
  // cardActions: {
  //   justifyContent: 'center'
  // }
})

function EmployeeCard() {
  const classes = useStyles()

  return (
    <Paper className={classes.card}>
      <CardMedia
        className={classes.image}
        component='img'
        alt='User'
        height='140'
        image='https://cdn.dribbble.com/users/1035801/screenshots/15922263/0-cover.png'
        title='User'
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.name} gutterBottom variant='h5' component='h2'>
          Chirita Alberto-Marian
        </Typography>
        <Typography className={classes.job} component='p'>
          Frontend Developer
        </Typography>
        <div className={classes.contact}>
          <div className={classes.contactItem}>
            <img className={classes.contactIcon} alt='iconPhone' src={iconPhone} />
            <span className={classes.contactText}>0727 123 456</span>
          </div>
          <div>
            <img className={classes.contactIcon} alt='iconPhone' src={iconEmail} />
            <span className={classes.contactText}>alberto.chirita@totalsoft.ro</span>
          </div>
        </div>
      </CardContent>
      {/* <CardActions className={classes.cardActions}>
        <Button size='large' color='#6418c3'>
          View
        </Button>
      </CardActions> */}
    </Paper>
  )
}

export default EmployeeCard
