import styled from "styled-components";

type StyledH2Props = {
  color?: "black";
};

type TitleProps = {
  type: "primary" | "secondary" | "tertiary";
  content: string;
  color?: "black";
};

const Title = ({ type, content, color }: TitleProps) => {
  if (type === "primary") {
    return <StyledH1>{content}</StyledH1>;
  }

  if (type === "secondary") {
    return <StyledH2 color={color}>{content}</StyledH2>;
  }

  if (type === "tertiary") {
    return <StyledH3>{content}</StyledH3>;
  }

  return <StyledH2>Something went wrong</StyledH2>;
};

export default Title;

// style
const StyledH1 = styled.h1``;
const StyledH2 = styled.h2<StyledH2Props>`
  padding: 5px 10px;
  ${(props) => props.color === "black" && "color: var(--color__text)"}
`;
const StyledH3 = styled.h3``;
