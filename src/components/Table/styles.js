import styled from 'styled-components'

export const TableContainer = styled.section`
	grid-column: 1/-1;
	grid-row: 3/4;

	@media (max-width: 768px) {
		grid-row: 4/5;
	}
`

export const Header = styled.header`
	display: flex;
	align-items: center;
	height: 50px;
	padding: 0 20px;
	background: linear-gradient(to right,#132268 0%,#572F5E 100%);
	font-family: 'Montserrat Medium', sans-serif;
	font-size: 1.25rem;
	color: #fff;
	border-radius: 12px 12px 0 0;
`

export const TableWrapper = styled.div`
	overflow-x: scroll;

	@media (max-width: 768px) {
		width: calc(100vw - 50px);
	}
`

export const Table = styled.table`
	width: max(100%, 1000px);
	font-size: 0.875rem;
	color: #969696;
	background: #fff;
	border-collapse: collapse;

	& thead {
		height: 60px;
		border-bottom: 1px solid #969696;

		th:nth-child(1) {
			width: 23.94%;
		}
		
		th:nth-child(2) {
			width: 20.4%;
		}
		
		th:nth-child(3) {
			width: 18.64%;
		}
		
		th:nth-child(4) {
			width: 19.92%;
		}
		
		th:nth-child(5) {
			width: 17.1%;
		}
		
	}

	& tbody {
		& tr {
			height: 60px;
			border-bottom: 1px solid #969696;
		
			&:nth-child(odd) {
				border-left: 4px solid #111e6c;
			}

			&:nth-child(even) {
				border-left: 4px solid #969696;
			}
		}
	}

	td {
		padding: 0 20px;

		&:first-child,
		&:last-child span {
			color: #111e6c;
		}

		& svg {
			margin-right: 5px;
			margin-bottom: -5px;
		}
	}
`
