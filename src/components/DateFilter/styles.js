import styled from 'styled-components'

export const Section = styled.section`
	grid-column: 2/-1;
	height: 50px;
	padding: 5px;
	background: #fff;
`

export const List = styled.ul`
	display: flex;
	justify-content: space-between;
	height: 100%;
`

export const Option = styled.a`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 250px;
	height: 100%;
	color: #111e6c;
	border-radius: 20px;
	cursor: pointer;
	transition: all .35s ease-in-out;
	
	&:hover,
	&.active {
		font-family: 'Montserrat Medium';
		background: #969696;
	}

`
