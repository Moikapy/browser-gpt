import styled from 'styled-components';
const Container = styled.div<{$flex?: boolean}>`
  ${(props) => (props.$flex ? 'display' : 'flex')};
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
`;
export default Container;
