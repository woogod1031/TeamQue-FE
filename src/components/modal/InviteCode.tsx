import { MouseEvent, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/configStore';
import ModalCloseButton from './ModalCloseButton';

const InviteCode = () => {
	const uuid =  useSelector((state: RootState) => state.modal.data)
	const uuidRef = useRef<HTMLInputElement>(null);

	const onClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		alert('공유하기 기능 구현 중')
	};

	useEffect(() => {
		if (uuidRef.current) {
			uuidRef.current.value = uuid
		}
	})

	const onCopy = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const content = uuidRef.current;
		if (content) {
			navigator.clipboard.writeText(content.value).then(() => {
				alert('코드 복사 완료');
			});
		}
	};

	return (
		<Form>
			<ModalCloseButton />
			<UpperContainer>
				<h2>더 많은 사람과 수업듣기</h2>
				<p>아래 링크를 복사하여 다른 사람을 초대할 수 있어요.</p>
				<Input
					type='text'
					placeholder='임의의 초대코드가 입력됩니다'
					ref={uuidRef}
				/>
			</UpperContainer>
			<Buttons>
				<Button onClick={onClick}>공유하기</Button>
				<Button onClick={onCopy}>복사하기</Button>
			</Buttons>
		</Form>
	);
};

export default InviteCode;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 760px;
	height: 268px;
	padding: 50px;
`;
const UpperContainer = styled.div`
	display: flex;
	height: 115px;
	flex-direction: column;
	align-items: start;
	justify-content: space-between;
`;

const Input = styled.input`
	width: 630px;
	height: 40px;
	border-radius: 7px;
	border: none;
	background-color: ${({ theme }) => theme.colors.base};
	font-size: 14px;
	padding-left: 20px;
	outline: none;
	&::placeholder {
		color: ${({ theme }) => theme.colors.sub};
	}
`;

const Buttons = styled.div`
	display: flex;
	justify-content: end;
	margin-right: 20px;
`;

const Button = styled.button`
	width: 100px;
	height: 40px;
	border-radius: 7px;
	border: none;
	background-color: ${({ theme }) => theme.colors.main};
	color: ${({ theme }) => theme.colors.buttonTitle};
	font-size: 14px;
	font-weight: 600;
	position: relative;
	margin: 0 10px;
	cursor: pointer;
`;
