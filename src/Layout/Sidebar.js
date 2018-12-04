import React, { Component } from 'react';
import { styled } from 'baseui'
import ChevronRight from 'baseui/icon/chevron-right';

import Heading from '../Components/Heading'

const Aside = styled('aside', {
	height: 'auto',
	padding: '1rem',
	backgroundColor: '#fff',
	border: '1px solid lightGray'
})

const StyledUl = styled('ul', {
	listStyleType: 'none',
	margin: '0',
	padding: '0'
})

const StyledLink = styled('li', {
	width: 'auto',
	height: 'auto',
	lineHeight: 1.5
})

const Sidebar = (props) => {

	return (
		<Aside style={{ gridArea: 'sidebar' }}>

			<Heading message={props.heading} />
			<StyledUl>
				<StyledLink>
					First Project
					<ChevronRight />
				</StyledLink>
				<StyledLink>
					Second Project
					<ChevronRight />
				</StyledLink>
			</StyledUl>

		</Aside>
	)
}

export default Sidebar