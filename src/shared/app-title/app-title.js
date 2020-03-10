import React from 'react';
import WRC from 'web-react-components';

const styles = {
  h2: {
    fontSize: '32px',
    fontWeight: 'normal'
  },
}


export default class AppTitle extends React.Component {
  render() {
    return (
      <h2 style={styles.h2}>{this.props.title} Todo</h2>
    )
  }
}


WRC.register(AppTitle, 'app-title', ['title']);