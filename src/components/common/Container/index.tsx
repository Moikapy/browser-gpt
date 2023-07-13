import styled from 'styled-components';
const Container = styled.div<{$flex?: boolean}>`
  ${(props) => (props.$flex ? 'display' : 'flex')};
  flex-direction: column;
  height: 100%;
  margin: 0;
  background-color: rgb(16, 16, 16);
  padding: 0.25rem;
  overflow-x: hidden;
  color: #fff;
`;
export default Container;
