import styled from "styled-components";

type ContainerProps = {
  type: "single" | "double";
};

type CardProps = {
  children: React.ReactNode;
  type?: "single" | "double";
  description?: string;
};
const Card = ({ children, type = "single", description }: CardProps) => {
  return (
    <Container type={type}>
      {children}
      {description && <Description>{description}</Description>}
    </Container>
  );
};

export default Card;

// style
const Container = styled.div<ContainerProps>`
  position: relative;
  padding: 10px 20px;
  //background-color: #61dafb;
  height: 100%;
  min-width: ${(props) => (props.type === "single" ? "160px" : "335px")};

  box-shadow: 0 5px 10px -3px;
`;

const Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: var(--color__primary);

  display: flex;
  justify-content: center;
  align-items: center;
`;
