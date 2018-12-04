// @flow
import React from 'react'
import { styled } from 'baseui'

const H1 = styled('h1', {
	margin: '1.25rem 0'
})

const Heading = (props) => (
	<H1>{props.message}</H1>
)

export default Heading