import styled from 'styled-components';
const _Container = styled.div.attrs((props) => ({
  display: props.display || 'flex',
}))`
  display: ${(props) => props.display};
  flex-direction: column;
  height: 100%;
  margin: 0;
  background-color: #ddd;
  padding-bottom: 0.5rem;
  overflow-x: hidden;
`;
export default function Container({children, display}) {
  return (
    <_Container display={display}>
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

        html,
        body,
        #__next,
        main {
          height: 600px;
          width: 500px;
          margin: 0px !important;
          font-family: 'Noto Serif', serif;
          overflow: hidden;
        }
      `}</style>
      {children}
    </_Container>
  );
}
