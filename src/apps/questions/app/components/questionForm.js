import withRoot from '../../../../shared/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '../../../../shared/modules/components/Typography';
import FormButton from '../../../../shared/modules/form/FormButton';

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
  questions: {
    marginTop: theme.spacing(2)
  }
}));

function QuestionsForm() {
  const classes = useStyles();
  const [submitting, setSubmitting] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState('');
  const [question, setQuestion] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setSubmitting(true);

    API.post(COLLECTIONS, {
      name,
      question,
      rating: email
    }, resetForm);
  };

  const resetForm = () => {
    setSent(false);
    setSubmitting(false);
    setName('');
    setQuestion('');
    setEmail('');
  };

  const handleQuestion = e => {
    setQuestion(e.target.value);
  };
  const handleName = e => {
    setName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div>
        <Typography variant="h3" gutterBottom marked="center" align="center">
          Questions
        </Typography>
        <Typography variant="body2" align="center">
          Please raise your questions, while in the presentation or afterwards.
          We will take these questions in the end of the presentation, if we are
          not able to answer there, we will try to connect you via email on the
          same.
        </Typography>
      </div>
      <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
          autoComplete="off"
          id="questions"
          name="questions"
          label="Your questions"
          variant="outlined"
          rows="4"
          fullWidth
          multiline
          required
          autoFocus
          value={question}
          className={classes.formField}
          onChange={handleQuestion}
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
        <TextField
          autoComplete="off"
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          type="email"
          className={classes.formField}
          onChange={handleEmail}
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

export default withRoot(QuestionsForm);
