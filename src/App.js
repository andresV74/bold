import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import GlobalFonts from './fonts/fonts'

import { Layout } from 'Components/Layout'

export const App = () => (
	<Layout>
		<GlobalStyles />
		<GlobalFonts />
		<h1>Bold.co</h1>
	</Layout>
)
