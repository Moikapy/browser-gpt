import styled from 'styled-components';
function Button({children, ...props}) {
  return (
    <button onClick={props.onClick} className={props.className || ''}>
      {children || props.label}
    </button>
  );
}
export default styled(Button)`
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
