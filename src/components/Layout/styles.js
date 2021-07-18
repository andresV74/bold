import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	grid-template-rows: repeat(3, auto);
	grid-template-columns: minmax(auto, 400px) repeat(2, auto);
	grid-gap: 15px 25px;
	padding: 50px;
	background: #e5e7ef;
`