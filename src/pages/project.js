// @flow
import React from 'react';

import Sidebar from '../Layout/Sidebar'
import Section from '../Layout/Section'

const Home = () => (
	<React.Fragment>
		<Sidebar heading="My Projects" style={{ gridArea: 'sidebar' }} />
		<Section heading="This is the Project Page" style={{ gridArea: 'section' }} />
	</React.Fragment>
);

export default Home;
