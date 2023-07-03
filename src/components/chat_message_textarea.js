import styled from 'styled-components';
const _Chat_Message_Textarea = styled.textarea`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;

  padding: 0.5rem;
  resize: none;
  border: 1px solid #000;
  border-radius: 0.5rem;
  width: 450px;
  height: 4.6875rem;
  &:focus {
    flex-grow: 1;
    padding: 0.5rem;
    resize: none;
    border: 1px solid #000;
    border-radius: 0.5rem;
  }
`;
export default function Chat_Message_Textarea({
  placeholder,
  onChange,
  onKeyDown,
  value,
}) {
  return (
    <_Chat_Message_Textarea
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
    />
  );
}
