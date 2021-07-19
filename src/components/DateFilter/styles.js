import styled from 'styled-components'

export const Section = styled.section`
	grid-column: 2/-1;
	height: 50px;
	padding: 5px;
	background: #fff;

	@media (max-width: 768px) {
		grid-column: 1/2;
		height: unset;
	}
`

export const List = styled.ul`
	display: flex;
	justify-content: space-between;
	height: 100%;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`

export const Option = styled.a`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: min(17.36vw, 250px);
	height: 100%;
	color: #111e6c;
	border-radius: 20px;
	cursor: pointer;
	transition: all .35s ease-in-out;
	
	&:hover,
	&.active {
		font-family: 'Montserrat Medium';
		background: #E4E5EC;
	}

	@media (max-width: 768px) {
		width: 250px;
		height: 35px;
	}

`
