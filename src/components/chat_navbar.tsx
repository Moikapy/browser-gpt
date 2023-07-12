import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  font-size: 1rem;
  color: #fff;
`;
export default function Chat_Navbar() {
  return (
    <Wrapper>
      <span>browser-gpt</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='bi bi-three-dots-vertical'
        viewBox='0 0 16 16'>
        <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
      </svg>
    </Wrapper>
  );
}
