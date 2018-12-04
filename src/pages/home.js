// @flow
import React from 'react';

import Sidebar from '../Layout/Sidebar'
import Section from '../Layout/Section'

const Home = () => (
	<React.Fragment>
		<Sidebar heading="My Projects" />
		<Section heading="Hello, Foobob!" />
	</React.Fragment>
);

export default Home;
