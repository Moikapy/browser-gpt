import styled from 'styled-components';
import Button from '../../common/Button';
import {useContext} from 'react';
import {AgentContext} from '../../AgentProvider';
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  justify-content: space-around;
  align-items: center;
  font-size: 0.85rem;
`;
const Current_Model = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.5rem;
  width: 4rem;
`;
export default function Chat_Navbar({onClick}) {
  const {state} = useContext(AgentContext);
  return (
    <Wrapper>
      <span>Browser-GPT</span>
      <Current_Model>{state.model}</Current_Model>
      <Button onClick={onClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-three-dots-vertical'
          viewBox='0 0 16 16'>
          <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
        </svg>
      </Button>
    </Wrapper>
  );
}
