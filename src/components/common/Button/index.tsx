import {MouseEventHandler, ReactNode} from 'react';
import styled from 'styled-components';
function Button({
  children,
  label,
  onClick = () => {},
  className,
  ...props
}: {
  children?: ReactNode;
  label?: string;

  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) {
  return (
    <button onClick={onClick} className={className || ''}>
      {children || label}
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
