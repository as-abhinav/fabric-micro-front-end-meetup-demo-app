import React, { Component } from 'react';
import API from '../../../../shared/utils/firebase';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { COLLECTIONS } from '../../../../common/constants';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    width: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  icons: {
    listStyle: 'none',
    padding: 0
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  count: {
    fontSize: '20px',
    paddingLeft: theme.spacing(4)
  }
}));

function SideCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            F
          </Avatar>
        }
        title="Total Feedback"
        subheader=""
      />
      <CardContent>
        {`Total feedback submitted `}
        <span className={classes.count}>{props.feedbacks.length}</span>
      </CardContent>
    </Card>
  );
}

export default class FeedbackDashboard extends Component {
  constructor(props) {
    super(props);
    this.dataListen = null;
    this.state = {
      feedbacks: []
    };
  }
  componentDidMount() {
    const fetchFb = async () => {
      this.dataListen = await API.listen(COLLECTIONS.feedback, data => {
        this.setState({
          feedbacks: [...this.state.feedbacks, data]
        });
      });
    };

    fetchFb();
  }

  componentWillUnmount() {
    this.dataListen();
  }

  render() {
    return <SideCard feedbacks={this.state.feedbacks}></SideCard>;
  }
}
