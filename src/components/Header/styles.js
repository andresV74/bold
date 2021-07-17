import styled from 'styled-components'

export const HeaderLayout = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 130px;
	padding: 0 50px;
	background: linear-gradient(to right,#122268 0%,#81395A 100%);

	@media (max-width: 480px) {
		justify-content: center;
		flex-wrap: wrap;
		gap: 0 50px;
	}
`

export const Options = styled.ul`
	display: flex;
	gap: 60px;
`

export const Option = styled.a`
	display: flex;
	align-items: center;
	gap: 5px;
	color: #fff;

	&:hover {
		text-decoration: underline;
	}
`
