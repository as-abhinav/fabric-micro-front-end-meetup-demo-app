import withRoot from '../../../shared/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FeedbackDashboard from './components/feedbackDashboard';
import FeedbackForm from './components/feedbackForm';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

function FeedbackApp() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
          <FeedbackForm />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FeedbackDashboard />
        </Grid>
      </Grid>
    </div>
  );
}

export default withRoot(FeedbackApp);
