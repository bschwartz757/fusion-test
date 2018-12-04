import React, { Component } from 'react';
import { styled } from 'baseui'

const FooterElement = styled('footer', {
	display: 'grid',
	gridTemplateColumns: '1fr 3fr 1fr',
	gridTemplateRows: '1fr',
	height: 'auto',
	backgroundColor: 'black',
	gridTemplateAreas: `
			". info ."
		`
});

const Centered = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
	color: 'white'
});

class Footer extends Component {
	state = {}

	render() {
		return (
			<FooterElement style={{ gridArea: 'footer' }}>
				<Centered style={{ gridArea: 'info' }}>
					<h1>Footer</h1>
				</Centered>
			</FooterElement>
		)
	}
}

export default Footer