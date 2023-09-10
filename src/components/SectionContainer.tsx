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
  height: 270px;
  padding-bottom: 20px;

  background-color: var(--color__secondary);
`;
