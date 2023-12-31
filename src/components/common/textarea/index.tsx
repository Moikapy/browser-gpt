import styled from 'styled-components';
const Textarea = styled.textarea`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  padding: 0.5rem;
  resize: none;
  border: 1px solid #000;
  border-radius: 0.5rem;
  min-width: 8rem;
  width: 100%;
  height: 4.6875rem;
  &:focus {
    flex-grow: 1;
    padding: 0.5rem;
    resize: none;
    border: 1px solid #000;
    border-radius: 0.5rem;
  }
`;
export default Textarea;
