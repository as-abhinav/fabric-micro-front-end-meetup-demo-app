import withRoot from '../../../shared/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AdminDashboard from './components/adminDashboard';
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

function QuestionsApp() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AdminDashboard />
        </Grid>
      </Grid>
    </div>
  );
}

export default withRoot(QuestionsApp);
