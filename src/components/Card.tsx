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
  height: 100%;
  overflow-y: ${(props) => (props.type === "single" ? "unset" : "scroll")};
  padding: ${(props) => (props.type === "single" ? "0" : "10px 20px")};
  min-width: ${(props) => (props.type === "single" ? "160px" : "335px")};

  background-color: var(--color__white);
  color: var(--color__text);
  box-shadow: var(--box__shadow);
`;

const Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--color__primary);
  color: var(--color__white);

  display: flex;
  justify-content: center;
  align-items: center;
`;
