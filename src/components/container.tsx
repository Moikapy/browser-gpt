import styled from 'styled-components';
const Container = styled.div<{$flex?: boolean}>`
  color: ${(props) => (props.$flex ? 'display' : 'flex')};
  flex-direction: column;
  height: 100%;
  margin: 0;
  background-color: #ddd;
  padding-bottom: 0.5rem;
  overflow-x: hidden;
`;
export default Container;
