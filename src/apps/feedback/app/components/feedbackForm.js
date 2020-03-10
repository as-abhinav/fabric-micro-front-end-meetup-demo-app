import withRoot from '../../../../shared/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '../../../../shared/modules/components/Typography';
import FormButton from '../../../../shared/modules/form/FormButton';
import CustomRatings from './customRatings';

import API from '../../../../shared/utils/firebase';
import { TextField } from '@material-ui/core';
import { COLLECTIONS } from '../../../../common/constants';

const useStyles = makeStyles(theme => ({
  formField: {
    background: theme.palette.background.default,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4)
  },
  form: {
    marginTop: theme.spacing(6)
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  feedback: {
    marginTop: theme.spacing(2)
  }
}));

function FeedbackForm() {
  const classes = useStyles();
  const [submitting, setSubmitting] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState('');
  const [feedback, setFeedback] = React.useState('');
  const [rating, setRating] = React.useState(5);

  const handleSubmit = e => {
    e.preventDefault();

    setSubmitting(true);
    API.post(
      COLLECTIONS.feedback,
      {
        name,
        feedback,
        rating
      },
      resetForm
    );
  };

  const resetForm = () => {
    setSent(false);
    setSubmitting(false);
    setName('');
    setFeedback('');
    setRating(5);
  };

  const handleFeedback = e => {
    setFeedback(e.target.value);
  };
  const handleName = e => {
    setName(e.target.value);
  };
  const handleRating = value => {
    setRating(value);
  };

  return (
    <div>
      <div>
        <Typography variant="h3" gutterBottom marked="center" align="center">
          Feedback
        </Typography>
        <Typography variant="body2" align="center">
          No one is perfect, and we thrive on getting better each day, your
          feedback will help us in it. Please feel free to suggest improvement
          or appreciation.
        </Typography>
      </div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          autoComplete="off"
          id="feedback"
          name="feedback"
          label="Your Feedback"
          variant="outlined"
          rows="4"
          fullWidth
          multiline
          required
          autoFocus
          value={feedback}
          className={classes.formField}
          onChange={handleFeedback}
        />

        <TextField
          autoComplete="off"
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          className={classes.formField}
          onChange={handleName}
        />

        <CustomRatings
          name="rating"
          ratings={rating}
          onchange={handleRating}
          editing={submitting || sent}
        />
        <FormButton
          className={classes.button}
          disabled={submitting || sent}
          size="large"
          color="secondary"
          fullWidth
        >
          {submitting || sent ? 'In progress…' : 'Submit'}
        </FormButton>
      </form>
    </div>
  );
}

export default withRoot(FeedbackForm);
