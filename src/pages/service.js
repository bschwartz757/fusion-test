// @flow
import React from 'react';

import Sidebar from '../Layout/Sidebar'
import Section from '../Layout/Section'

const Service = () => {
	return (
		<React.Fragment>
			<Sidebar heading="My Projects" style={{ gridArea: 'sidebar' }} />
			<Section heading="This is the Service Page" style={{ gridArea: 'section' }} />
		</React.Fragment>
	);
}

export default Service;
