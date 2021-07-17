import React from 'react';
import { Logo } from 'Components/Logo'
import { HeaderLayout, Options, Option } from './styles'
import { FiHelpCircle } from "react-icons/fi";

export const Header = () => {
	return (
		<HeaderLayout>
			<Logo />
			<nav>
				<Options>
					<li><Option>Mi negocio</Option></li>
					<li><Option>Ayuda <FiHelpCircle /></Option></li>
				</Options>
			</nav>
		</HeaderLayout>
	)
};
