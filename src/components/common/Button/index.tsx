import styled from 'styled-components';
const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 1rem;
  color: #fff;
  font-size: 0.8125rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`;
export default function Button({children, ...props}) {
  return (
    <Wrapper className={props.className || ''}>
      {children || props.label}
    </Wrapper>
  );
}
