import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	grid-template-rows: 50px repeat(2, auto);
	grid-template-columns: minmax(auto, 400px) auto 250px;
	grid-gap: 15px 25px;
	padding: 50px;
	background: #e5e7ef;
`