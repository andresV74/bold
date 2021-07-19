import styled from 'styled-components'

export const Card = styled.section`
	grid-row: 1/3;
	width: 100%;
	background: #fff;
	border-radius: 12px;
	overflow: hidden;
	
	@media (max-width: 768px) {
		grid-row: 2/3;
	}
`

export const Header = styled.header`
	height: 60px;
	padding: 0 20px;
	background: linear-gradient(to right,#62325E 0%,#B26678 100%);
`

export const Title = styled.h2`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: inherit;
	font-family: 'Montserrat Medium';
	font-size: 1rem;
	color: #fff;
`

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 140px;
`

export const Sales = styled.p`
	background: linear-gradient(to right,#66355F 0%,#B96A7A 100%);
	font-family: 'Montserrat Bold';
	font-size: 2rem;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`
export const Date = styled.p`
	margin-top: 5px;
	color: #35407E;

	&:first-letter {
		text-transform: uppercase;
	}
`
