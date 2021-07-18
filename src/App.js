import React, { useState } from 'react'
import { GlobalStyles } from './GlobalStyles'
import GlobalFonts from './fonts/fonts'

import { Layout } from 'Components/Layout'
import { SalesCard } from 'Components/SalesCard'
import { DateFilter } from 'Components/DateFilter'
import { Filter } from 'Components/Filter'

import { DateFilterContext } from 'Context/DateFilterContext'

export const App = () => {
	const [date, setDate] = useState({})

	return (
		<Layout>
			<GlobalStyles />
			<GlobalFonts />
			<DateFilterContext.Provider value={{date, setDate}}>
				<SalesCard />
				<DateFilter />
			</DateFilterContext.Provider>
			<Filter />
		</Layout>
	)
}