import styled from 'styled-components';

const ClassHome = () => {
	return (
		<Container>
			<LeftBox>
				<ClassInfo />
				<Calendar />
			</LeftBox>
			<Forum />
		</Container>
	);
};

export default ClassHome;

const Container = styled.div`
	/* 사이즈 */
	width: 1200px;
	height: 850px;
	/* 레이아웃 */
	margin: 100px auto;
	display: flex;
	justify-content: space-between;
`;

const LeftBox = styled.div`
	/* 사이즈 */
	width: 280px;
	height: 850px;
	/* 레이아웃 */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ClassInfo = styled.div`
	/* 사이즈 */
	width: 280px;
	height: 540px;
	/* 임시 스타일 코드 */
	background-color: #ccc;
`;

const Calendar = styled.div`
	/* 사이즈 */
	width: 280px;
	height: 290px;
	/* 임시 스타일 코드 */
	background-color: #ccc;
`;
const Forum = styled.div`
	/* 사이즈 */
	width: 890px;
	height: 850px;
	/* 임시 스타일 코드 */
	background-color: #ccc;
`;