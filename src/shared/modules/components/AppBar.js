import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: '#005fff'
  },
});

function AppBar(props) {
  const { classes } = props;

  return <MuiAppBar elevation={0} position="static" {...props} className={classes.root}/>;
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);
