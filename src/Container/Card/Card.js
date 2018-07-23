import React from 'react';
import Btn from '../Button/Btn'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width:280 ,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
const styl = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card} style={{marginBottom:10}}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Item:{kkk}
          </Typography>
          <Typography variant="headline" component="h2">
           Chicken Makhni Handi
          </Typography>
          <Typography component="p">
          <br />
            Quantity:1 <br />
            Price:790 <br />
           Status:Queued
           </Typography>
        </CardContent>
        <CardActions>
          <Btn />
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Item:2
          </Typography>
          <Typography variant="headline" component="h2">
           Paneer Reshmi Kabab
          </Typography>
          <Typography component="p">
          <br />
            Quantity:2 <br />
            Price:1390 <br />
           Status:Cooked
           </Typography>
        </CardContent>
        <CardActions>
          <Btn />
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
