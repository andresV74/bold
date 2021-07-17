import React from 'react'
import { Header } from '../Header'
import { Container } from './styles'

export const Layout = ({ children }) => (
	<React.Fragment>
		<Header />
		<Container>
			{children}
		</Container>
	</React.Fragment>
)