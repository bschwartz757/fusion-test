import React, { Component } from 'react';
import { Link } from 'fusion-plugin-react-router';
import { assetUrl } from 'fusion-core';
import { styled } from 'baseui'

import { Avatar } from 'baseui/avatar'

const HeaderElement = styled('header', {
	display: 'grid',
	gridTemplateColumns: '1fr 3fr 1fr',
	gridTemplateRows: '1fr',
	height: 'auto',
	backgroundColor: 'black',
	gridTemplateAreas: `
			"brand . nav"
		`
})

const Brand = styled('div', {
	height: 'auto',
	color: '#fff'
})

const Nav = styled('nav', {
	height: 'auto'
});

const StyledUl = styled('ul', {
	listStyleType: 'none',
	margin: '0',
	padding: '0'
})

const Centered = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
	fontSize: '1.5rem'
});

const StyledLink = styled('li', {
	display: 'inline',
	width: '20%',
	paddingLeft: '2rem'
})

const linkStyle = {
	textDecoration: 'none',
	color: 'white'
}

class Header extends Component {
	state = {}

	render() {
		return (
			<HeaderElement style={{ gridArea: 'header' }}>
				<Centered>
					<Brand>
						<Avatar
							name="Logo"
							size="scale1000"
							src={assetUrl('../../Assets/img/coconut.png')}
						/> COCONUT
					</Brand>
				</Centered>
				<Nav style={{ gridArea: 'nav' }}>
					<Centered>
						<StyledUl>
							<StyledLink>
								<Link to="/" style={linkStyle}>Home</Link>
							</StyledLink>
							<StyledLink>
								<Link to="/project" style={linkStyle}>Project</Link>
							</StyledLink>
							<StyledLink>
								<Link to="/service" style={linkStyle}>Service</Link>
							</StyledLink>
						</StyledUl>
					</Centered>
				</Nav>
			</HeaderElement>
		)
	}
}

export default Header