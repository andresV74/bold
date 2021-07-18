import React, { useContext } from 'react'
import { DateFilterContext } from 'Context/DateFilterContext'
import { Section, List, Option } from './styles'
import Data from 'Data/DateInfo.json'

export const DateFilter = () => {
	const { setDate } = useContext(DateFilterContext)

	return (
		<Section>
			<List>
				{Data.map(date => {
					return (
						<li key={date.id}>
							<Option onClick={async () => {
								await setDate(date)
								console.log(this)
							}
							}>
								{date.period}
							</Option>
						</li>
					)
				})}
			</List>
		</Section>
	)
	
};
