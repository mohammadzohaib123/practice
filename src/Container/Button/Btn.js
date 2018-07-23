import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function ButtonSizes(props) {
  const { classes } = props;
  return (

    <div>
      <Button variant="fab" color="secondary" aria-label="Add" className={classes.button} style={{ backgroundColor: "#41b3ec" }}>
        <span style={{color:"#333",fontFamily:"Roboto",fontWeight:"bold"}}>queue</span>
        </Button>
      <Button variant="fab" color="secondary" aria-label="Add" className={classes.button}>
      <span style={{color:"#333",fontFamily:"Roboto",fontWeight:"bold"}}>cook</span>
        </Button>
      <Button variant="fab" color="secondary" aria-label="Add" className={classes.button} style={{ backgroundColor: "#4bec50" }} >
      <span style={{color:"#333",fontFamily:"Roboto",fontWeight:"bold"}}>deliv</span>
        </Button>
    </div>

  );
}

ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSizes);
