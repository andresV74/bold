import React, { useContext, useRef, useEffect } from 'react'
import { DateFilterContext } from 'Context/DateFilterContext'
import { Section, List, Option } from './styles'
import Data from 'Data/DateInfo.json'

export const DateFilter = () => {
	const { setDate } = useContext(DateFilterContext)
	const buttons = {
		optionDateRef1: useRef(),
		optionDateRef2: useRef(),
		optionDateRef3: useRef(),
	}

	useEffect(() => {
		buttons.optionDateRef1.current.classList.add('active')
	}, [])

	return (
		<Section>
			<List>
				{Data.map(date => {
					return (
						<li key={date.id}>
							<Option ref={eval(`buttons.optionDateRef${date.id}`)} 
											onClick={async () => {
												await setDate(date)
												for (const property in buttons) {
													if (property === `optionDateRef${date.id}`) {
														buttons[property].current.classList.add('active')
													} else {
														buttons[property].current.classList.remove('active')
													}
												}
							}}>
								{date.period}
							</Option>
						</li>
					)
				})}
			</List>
		</Section>
	)
	
};
