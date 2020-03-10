import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../../../shared/modules/components/Button';
import Typography from '../../../../shared/modules/components/Typography';
import HeroLayout from './layout';
import { APPLICATIONS } from '../../../../shared/utils/applications.config';
import { navigate } from '../../../../common/helpers';

const backgroundImage =
  'https://uploads-ssl.webflow.com/5d8ac4a88c12c797c7368ab7/5d9d37b0e6b3b480756bebb2_Shape6-tinified.png';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#111',
    backgroundPosition: 'center'
  },
  subContainer: {
    maxWidth: '600px'
  },
  button: {
    minWidth: 200,
    margin: '10px'
  },
  btnContainer: {
    textAlign: 'center'
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  },
  subHead: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  body: {
    marginBottom: theme.spacing(2)
  },
  more: {
    marginTop: theme.spacing(2)
  }
});

function Hero(props) {
  const { classes } = props;

  return (
    <HeroLayout backgroundClassName={classes.background}>
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Fabric - Meetup
      </Typography>
      <div className={classes.subContainer}>
        <Typography
          align="center"
          variant="h5"
          marked="center"
          className={classes.subHead}
        >
          Details
        </Typography>
        <Typography variant="body1" className={classes.body}>
          Web applications are getting more and more complex. Many organisations
          are struggling to maintain monolithic front-end codebases and to scale
          their front-end development processes across multiple teams.
        </Typography>
        <Typography variant="body1" className={classes.body}>
          How Micro Frontends can help big teams? What are their main
          advantages? What are their restrictions? Let’s take a closer look at a
          working Micro Frontend application developed with multiple apps using
          multiple frameworks.
        </Typography>
        <Typography variant="body1" className={classes.body}>
          Micro frontends are just one approach to managing that complexity, by
          splitting products up into smaller, simpler applications that can be
          delivered all the way to production by independent, autonomous teams.
        </Typography>
        <Typography variant="body1" className={classes.body}>
          Let's dig deep and learn more about Micro Frontends in detail.
        </Typography>
        <Typography
          align="center"
          variant="h5"
          marked="center"
          className={classes.subHead}
        >
          About the host
        </Typography>
        <Typography variant="body1" marked="center" className={classes.body}>
          With over 18-years in front-end development, Abhinav Sharma is
          primarily responsible for UI development, UX analysis, and designing
          UI architecture at Fabric Group.
        </Typography>
      </div>
      <div className={classes.btnContainer}>
        <Typography
          align="center"
          variant="h5"
          marked="center"
          className={classes.subHead}
        >
          Explore more
        </Typography>
        {APPLICATIONS.map((app, index) =>
          app.label ? (
            <Button
              color="secondary"
              variant="contained"
              size="large"
              className={classes.button}
              component="a"
              key={index}
              onClick={() => navigate(app.url)}
            >
              {app.label}
            </Button>
          ) : (
            ''
          )
        )}
      </div>
    </HeroLayout>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);
