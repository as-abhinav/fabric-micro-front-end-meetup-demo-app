import React, { Component } from 'react';
import API from '../../../../shared/utils/firebase';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { COLLECTIONS } from '../../../../common/constants';

import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const useStyles = makeStyles(theme => ({
  root: {},
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
    padding: 0,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  count: {
    fontSize: '20px',
    paddingLeft: theme.spacing(1)
  }
}));
const size = '40px';
const iconClasses = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icons: {
    width: size,
    height: size
  }
};
function SideCard(props) {
  const classes = useStyles();
  const getFeedbackCount = rating => {
    return props.items
      ? props.items.filter(_ => _.rating === rating).length
      : 0;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Q
          </Avatar>
        }
        title={`Total ${props.type}`}
        subheader={`number:  ${props.items.length}`}
      />
      <CardContent>
        {props.type === 'Feedback' ? (
          <ul className={classes.icons}>
            <li className={classes.listItem}>
              <SentimentVeryDissatisfiedIcon style={iconClasses.icons} />
              <span className={classes.count}>{getFeedbackCount(1)}</span>
            </li>
            <li className={classes.listItem}>
              <SentimentDissatisfiedIcon style={iconClasses.icons} />
              <span className={classes.count}>{getFeedbackCount(2)}</span>
            </li>
            <li className={classes.listItem}>
              <SentimentSatisfiedIcon style={iconClasses.icons} />
              <span className={classes.count}>{getFeedbackCount(3)}</span>
            </li>
            <li className={classes.listItem}>
              <SentimentSatisfiedAltIcon style={iconClasses.icons} />
              <span className={classes.count}>{getFeedbackCount(4)}</span>
            </li>
            <li className={classes.listItem}>
              <SentimentVerySatisfiedIcon style={iconClasses.icons} />
              <span className={classes.count}>{getFeedbackCount(5)}</span>
            </li>
          </ul>
        ) : (
          ''
        )}

        <hr />
        <ol>
          {props.items
            ? props.items.map((item, index) => {
                return (
                  <li key={index}>
                    <div>Name: {item.name}</div>
                    {item.rating && <div>Rating: {item.rating}</div>}
                    {item.feedback && <div>Feedback: {item.feedback}</div>}
                    {item.email && <div>Email: {item.email}</div>}
                    {item.question && <div>Question: {item.question}</div>}
                  </li>
                );
              })
            : ''}
        </ol>
      </CardContent>
    </Card>
  );
}

export default class QuestionsDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbacks: [],
      questions: []
    };
  }

  componentDidMount() {
    const fetchFb = async (collection, callback) => {
      return await API.get(collection, callback);
    };
    const { feedbacks, questions } = this.state;

    fetchFb(COLLECTIONS.feedback, data => {
      this.setState({ feedbacks: [...feedbacks, ...data] });
    });
    fetchFb(COLLECTIONS.question, data =>
      this.setState({ questions: [...questions, ...data] })
    );
  }

  render() {
    const { feedbacks, questions } = this.state;

    return (
      <div>
        <SideCard items={feedbacks} type="Feedback"></SideCard>
        <div>&nbsp;</div>
        <SideCard items={questions} type="Questions"></SideCard>
      </div>
    );
  }
}
