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
    <Container type={type} className="rounded-2xl mx-auto pb-10 flex-col justify-center">
      {children}
      {description && (
        <Description>
          <p>{description}</p>
          <span>10 min</span>
        </Description>
      )}

    </Container>
  );
};

export default Card;

// style
const Container = styled.div<ContainerProps>`
  position: relative;
  height: 100%;
  overflow: ${(props) => (props.type === "single" ? "hidden" : "auto")};
  padding: ${(props) => (props.type === "single" ? "0" : "10px 20px")};
  min-width: ${(props) => (props.type === "single" ? "160px" : "335px")};

  ${(props) => props.type === "double" && "background-color: var(--color__white);"}
  color: var(--color__text);
`;

const Description = styled.div`
  width: 100%;
  height: 66px;
  background-color: var(--color__secondary);
  color: var(--color__white);

  
  
  display: flex;
  flex-direction: column;
  gap:5px;
  justify-content: center;
  align-items: flex-start;
  padding:0 10px;
  p{
    font-size:15px;
  }
  span{
    font-size:12px;
  }
`;
