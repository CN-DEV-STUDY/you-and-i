import styled from "styled-components";

type SectionContainerProps = {
  children: React.ReactNode;
};
const SectionContainer = ({ children }: SectionContainerProps) => {
  return <Container>{children}</Container>;
};

export default SectionContainer;

// style
const Container = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;
