import styled from "styled-components";

type ScrollProps = {
  children: React.ReactNode
}

const VerticalScroll = ({children}: ScrollProps) => {
  return <Container>{children}</Container>
}

export default VerticalScroll;

// style
const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  
  padding: 10px 10px;
  height: 212px;
  width: 100%;
  overflow-x: scroll;
  
`;