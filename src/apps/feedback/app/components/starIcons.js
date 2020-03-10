import React from 'react';

import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const size = '60px';
const iconClasses = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icons: {
    width: size,
    height: size,
    marginTop: '20px'
  }
};

export const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon style={iconClasses.icons} />,
    label: 'Very Dissatisfied'
  },
  2: {
    icon: <SentimentDissatisfiedIcon style={iconClasses.icons} />,
    label: 'Dissatisfied'
  },
  3: {
    icon: <SentimentSatisfiedIcon style={iconClasses.icons} />,
    label: 'Neutral'
  },
  4: {
    icon: <SentimentSatisfiedAltIcon style={iconClasses.icons} />,
    label: 'Satisfied'
  },
  5: {
    icon: <SentimentVerySatisfiedIcon style={iconClasses.icons} />,
    label: 'Very Satisfied'
  }
};
