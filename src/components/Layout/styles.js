import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: min(27.78vw,400px) auto 250px;
	grid-gap: 15px 25px;
	padding: 50px;
	background: #e5e7ef;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		padding: 25px;
	}
`