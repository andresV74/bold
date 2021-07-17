import React from 'react'
import { Card, Header, Title, Content, Sales, Date } from './styles'
import { FiInfo } from "react-icons/fi";


export const SalesCard = ({ period, sales, year }) => {
	return (
		<Card>
			<Header>
				<Title>
					<span>Total de ventas {period}</span>
					<FiInfo />
				</Title>
			</Header>
			<Content>
				<Sales>${sales}</Sales>
				<Date>{period}, {year}</Date>
			</Content>
		</Card>
	)
};
