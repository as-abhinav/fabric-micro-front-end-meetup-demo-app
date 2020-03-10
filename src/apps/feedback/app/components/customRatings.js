import React from 'react';
import PropTypes from 'prop-types';

import StarRatingComponent from 'react-star-rating-component';
import { customIcons } from './starIcons';

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired
};
 
export default class CustomRatings extends React.Component {
  onStarClick(nextValue, prevValue, name) {
    this.props.onchange(nextValue);
  }
 
  render() {
    const { ratings } = this.props;
    
    return (                
      <div>
        <StarRatingComponent 
          name={this.props.name} 
          value={ratings}
          renderStarIcon={(ratingValue) => <IconContainer value={ratingValue}/>}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}