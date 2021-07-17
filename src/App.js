import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import GlobalFonts from './fonts/fonts'

import { Layout } from 'Components/Layout'
import { SalesCard } from 'Components/SalesCard'
import { DateFilter } from 'Components/DateFilter'

export const App = () => (
	<Layout>
		<GlobalStyles />
		<GlobalFonts />
		<SalesCard period="septiembre" sales="1.560.000" year="2020" />
		<DateFilter />
	</Layout>
)
