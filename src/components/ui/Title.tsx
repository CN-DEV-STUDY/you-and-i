import styled from "styled-components";

type TitleProps = {
  type: 'primary' | 'secondary' | 'tertiary'
  content: string
}

const Title = ({type, content} : TitleProps) => {
  if (type === 'primary') {
    return <StyledH1>{content}</StyledH1>
  }

  if (type === 'secondary') {
    return <StyledH2>{content}</StyledH2>
  }

  if (type === 'tertiary') {
    return <StyledH3></StyledH3>
  }

  return <StyledH2>Something went wrong</StyledH2>
}

export default Title;

// style
const StyledH1 = styled.h1``;
const StyledH2 = styled.h2`
  padding: 5px 10px;
`;
const StyledH3 = styled.h3`
  
`