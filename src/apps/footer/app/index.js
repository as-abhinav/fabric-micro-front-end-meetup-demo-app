import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../../../shared/modules/components/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.primary
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  span: {
    padding: `0 ${theme.spacing(1)}px`
  }
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <span className={classes.span}>© </span>
        <Link color="inherit" href="https://fabricgroup.com.au/">
          Fabric Group
        </Link>
        <span className={classes.span}>{` ${new Date().getFullYear()}`}</span>
      </Container>
    </Typography>
  );
}
