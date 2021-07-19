import React from 'react'
import Data from 'Data/SalesData.json'
import { FiShoppingCart, FiLink } from "react-icons/fi"
import { FaCcMastercard } from "react-icons/fa"

import { TableContainer, Header, TableWrapper, Table } from './styles'

export const TableComponent = () => {
	return (
		<TableContainer>
			<Header>Tus ventas de septiembre</Header>
			<TableWrapper>
				<Table>
					<thead>
						<tr>
							<th>Transacción</th>
							<th>Fecha y hora</th>
							<th>Método de pago</th>
							<th>ID transacción Bold</th>
							<th>Monto</th>
						</tr>
					</thead>
					<tbody>
						{Data.map(transaction => {
							return (
								<tr key={transaction.id}>
									<td>{transaction.ico === "cart" ? <FiShoppingCart size="1.5rem" /> : <FiLink size="1.5rem" />}
									{transaction.transaction}</td>
									<td>{transaction.date}</td>
									<td><FaCcMastercard size="1.5rem" />{transaction.method}</td>
									<td>{transaction.boldID}</td>
									<td><span>${transaction.quantity}</span><br />
										{transaction.transaction.includes('exitoso') && "Deducción Bold -$1.500"}</td>
								</tr>
							)
						})}
					</tbody>
				</Table>
			</TableWrapper>
		</TableContainer>
	)
}
