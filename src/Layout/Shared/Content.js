import React, { Component } from 'react';
import { Router, Route, Switch } from 'fusion-plugin-react-router';

import Home from '../../pages/home.js';
import Service from '../../pages/service.js';
import Project from '../../pages/project.js';
// import PageNotFound from '../pages/pageNotFound.js';

import { styled } from 'baseui'

const ContentContainer = styled('main', {
	display: 'grid',
	gridTemplateColumns: '0 1fr 3fr 0',
	gridTemplateRows: '1fr',
	gridGap: '1.25rem',
	gridTemplateAreas: `
		". sidebar section ."
	`
});

class Content extends Component {
	render() {
		return (
			<ContentContainer style={{ gridArea: 'content' }}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/project" component={Project} />
					<Route exact path="/service" component={Service} />
				</Switch>
			</ContentContainer>
		)
	}
}

export default Content