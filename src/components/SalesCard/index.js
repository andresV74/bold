import React, { useContext } from 'react'
import { DateFilterContext } from 'Context/DateFilterContext'
import Data from 'Data/DateInfo.json'

import { Card, Header, Title, Content, Sales, Date } from './styles'
import { FiInfo } from "react-icons/fi"


export const SalesCard = () => {
	const { date } = useContext(DateFilterContext)

	return (
		<Card>
			<Header>
				<Title>
					<span>Total de ventas {date.period ? date.period : Data[0].period}</span>
					<FiInfo />
				</Title>
			</Header>
			<Content>
				<Sales>${date.sales ? date.sales : Data[0].sales}</Sales>
				<Date>{date.period ? date.period : Data[0].period}, {date.year ? date.year : Data[0].year}</Date>
			</Content>
		</Card>
	)
};
