import React from 'react'
import { Header } from './Header'

export const Layout = ({ children }) => (
	<React.Fragment>
		<Header />
		{children}
	</React.Fragment>
)