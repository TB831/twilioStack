import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FlightPigeon from '../../../images/FlightPigeon.png';


const styles = theme => ({
  root: {
    flexGrow: 1,
    padding:150,
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'right',
    background: `url(${FlightPigeon})`,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:150
  },
  paper2:{
      padding: theme.spacing.unit * 2,
      textAlign:'left',
      color: theme.palette.text.secondary,
      height:250
  },
  detail:{
    fontSize:32,
  },
  detail2:{
    fontSize:16,
  }
});

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs className={classes.paper}>
          
        </Grid>
        <Grid item xs className={classes.paper}>
        
        </Grid>
        <Grid item xs className={classes.paper}>
         
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs className={classes.paper}>
       
        </Grid>
        <Grid item xs={6} className={classes.paper2}>
        <div>
        <p className={classes.detail}> Customized Twilio <br/> Solutions that Help You Do<br/> Business <b><i>Better</i></b>. </p>
        <p className={classes.detail2}> FlightLine helps the world’s leading firms be more profitable and <br/> efficient across any industry. 
        <br/> Reach out to thousands of customers each day via text & call communication. </p>
        </div> 
        </Grid>
        <Grid item xs className={classes.paper}>
       
        </Grid>
      </Grid>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);
