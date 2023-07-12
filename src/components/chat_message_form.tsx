import styled from 'styled-components';
import Textarea from './common/textarea';
const _Chat_Message_Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-items: start;
  padding: 1rem 1rem;

  width: inherit;
  min-height: 4.6875rem;
  height: 100% !important;
  max-height: 6.25rem !important;
`;
export default function Chat_Message_Form({
  loading,
  onSubmit,
  onChange,
  defaultValue,
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e);
    }
  };
  return (
    <_Chat_Message_Form className='input-form' onSubmit={onSubmit}>
      {!loading ? (
        <Textarea
          value={defaultValue}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder='Type your message and press enter...'
        />
      ) : (
        <span>Processing...</span>
      )}
    </_Chat_Message_Form>
  );
}
