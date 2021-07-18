import React, { useState } from 'react'
import { FilterComponent, Button, Window, Close, Title, FieldSet, Label, Apply } from './styles'
import { FiFilter, FiX } from "react-icons/fi";

export const Filter = () => {
	const [visible, setVisible] = useState(false)
	return (
		<FilterComponent>
			<Button onClick={() => setVisible(true)}>
				<span>FILTRAR</span>
				<FiFilter />
			</Button>
			<Window className={visible ? 'active' : ''}>
				<Close onClick={() => setVisible(false)}>
					<FiX />
				</Close>
				<Title>FILTRAR</Title>
				<FieldSet>
					<input type="checkbox" name="cobro1" id="cobro1" />
					<Label htmlFor="cobro1">Cobro con datáfono</Label>
				</FieldSet>
				<FieldSet>
					<input type="checkbox" name="cobro2" id="cobro2" />
					<Label htmlFor="cobro2">Cobros con link de pago</Label>
				</FieldSet>
				<FieldSet>
					<input type="checkbox" name="todos" id="todos" />
					<Label htmlFor="todos">Ver todo</Label>
				</FieldSet>
				<Apply>Aplicar</Apply>
			</Window>
		</FilterComponent>
)
}