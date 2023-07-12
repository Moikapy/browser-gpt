import styled from 'styled-components';
const Container = styled.div<{$flex?: boolean}>`
  ${(props) => (props.$flex ? 'display' : 'flex')};
  flex-direction: column;
  height: 100%;
  margin: 0;
  background-color: rgb(16, 16, 16);
  padding-bottom: 0.5rem;
  overflow-x: hidden;
`;
export default Container;
