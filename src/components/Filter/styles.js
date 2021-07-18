import styled from 'styled-components'

export const FilterComponent = styled.section`
	position: relative;
	grid-column: 3/4;
	grid-row: 2/3;
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	width: 250px;
	height: 50px;
	color: #111e6c;
	background: #fff;
	border-radius: 8px;
	cursor: pointer;
`

export const Window = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 350px;
	padding: 15px;
	background: #fff;
	border-radius: 10px;
	box-shadow: 0 3px 11px #0000001f;
	transition: all .45s ease-in-out;
	transform: translateX(-250px);
	opacity: 0;

	&.active {
		transform: translateX(0);
		opacity: 1;
	}

`

export const Close = styled.button`
	position: absolute;
	top: 15px;
	right: 15px;
	width: 24px;
	height: 24px;
	cursor: pointer;

	svg {
		width: 24px;
		height: 24px;
	}
`

export const Title = styled.p`
	margin-bottom: 20px;
	text-align: center;
	color: #111e6c;

`

export const FieldSet = styled.fieldset`
	margin: 0;
	padding: 5px 0;
	border: none;
`

export const Label = styled.label`
	margin-left: 5px;
	font-family: 'Montserrat Medium';
	font-size: 1.25rem;
	color: #111e6c;

`

export const Apply = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 180px;
	margin: 20px auto 0;
	height: 50px;
	font-family: 'Montserrat Medium';
	color: #fff;
	background: #E9A3A6;
	border-radius: 25px;
	cursor: pointer;
	transition: all .35s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`