import withRoot from '../../../shared/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';

import Hero from './components/hero';

function Home() {
  return <Hero />;
}

export default withRoot(Home);
