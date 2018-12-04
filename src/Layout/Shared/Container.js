import React, { Component } from 'react';
import { LightTheme, ThemeProvider } from 'baseui';
import { styled } from 'baseui'

import Content from './Content'
import Header from './Header'
// import Footer from './Footer'

const Wrapper = styled('div', {
	display: 'grid',
	gridTemplateColumns: '100%',
	gridTemplateRows: '5rem auto',
	gridGap: '1.25rem',
	height: '100vh',
	gridTemplateAreas: `
			"header"
			"content"
		`
})

class Container extends Component {
	render() {

		return (
			<ThemeProvider theme={LightTheme}>
				<style>
					{`
        html,body,#root{height:100%;}
        html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}
        body{margin:0;}
        button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}
        input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}
        `}
				</style>
				<Wrapper>
					<Header />
					<Content />
				</Wrapper>
			</ThemeProvider>
		)
	}
}

export default Container