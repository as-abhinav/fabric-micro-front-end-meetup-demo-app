import withRoot from '../../../shared/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import QuestionsDashboard from './components/questionsDashboard';
import QuestionForm from './components/questionForm';
import Grid from '@material-ui/core/Grid';
import { navigate } from '../../../common/helpers';
import { URLS } from '../../../common/constants';

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
        <Grid item xs={12} sm={9}>
          <QuestionForm />
        </Grid>
        <Grid item xs={12} sm={3}>
          <QuestionsDashboard />
          <div onClick={() => navigate(URLS.admin)}>&nbsp;</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRoot(QuestionsApp);
