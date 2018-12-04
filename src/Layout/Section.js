import React, { Component } from 'react';
import { styled } from 'baseui'

import Card from '../Components/Card'
import Heading from '../Components/Heading'
import Alert from '../Components/Alert'

const SectionElement = styled('section', {
	height: 'auto',
	padding: '1.25rem',
	backgroundColor: '#fff',
	border: '1px solid lightGray'
})

const Section = (props) => {

	return (
		<SectionElement style={{ gridArea: 'section' }}>
			<Heading message={props.heading} />
			<p>Here are some things you might want to take a look at</p>
			<Alert />
		</SectionElement>
	)
}

export default Section