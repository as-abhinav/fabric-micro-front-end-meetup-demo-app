import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../../../shared/modules/components/AppBar';
import Toolbar, {
  styles as toolbarStyles
} from '../../../shared/modules/components/Toolbar';
import { APPLICATIONS } from '../../../shared/utils/applications.config';
import { navigate } from '../../../common/helpers';
import { URLS } from '../../../common/constants';

const styles = theme => ({
  title: {
    fontSize: 24,
    cursor: 'pointer'
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between'
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  rightLink: {
    fontSize: 16,
    textTransform: 'none',
    color: theme.palette.common.white,
    marginLeft: theme.spacing(2),
    cursor: 'pointer'
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  }
});

function NavBar(props) {
  const { classes } = props;

  const navigateToUrl = (e, url) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            onClick={e => navigateToUrl(e, URLS.home)}
          >
            {'Meetup'}
          </Link>
          <div className={classes.right}>
            {APPLICATIONS.map((app, index) =>
              app.label ? (
                <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  key={index}
                  className={classes.rightLink}
                  onClick={e => navigateToUrl(e, app.url)}
                >
                  {app.label}{' '}
                </Link>
              ) : (
                ''
              )
            )}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
