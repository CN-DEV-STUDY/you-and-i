import styled from "styled-components";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCalendar2Minus, BsChatHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button } from "@mui/joy";


const BottomBar = () => {
  return (
    <Container>
      <Inner>
      <Link to="/">
        <GoHomeFill />
      </Link>
      <Link to="/search">
        <HiOutlineSearch />
      </Link>
        {/*<Button variant="outlined" color="neutral">*/}
      <Link to="/new-story">
        <AiOutlinePlus />
      </Link>
        {/*</Button>*/}
      <Link to="/plan">
        <BsCalendar2Minus />
      </Link>
      <Link to="/chat">
        <BsChatHeart />
      </Link>
      </Inner>
    </Container>
  );
};

export default BottomBar;

// style
const Container = styled.div`
  position:fixed;
  bottom:0;
  padding:20px;
  width:100%; 
`
const Inner = styled.div`
  width: 100%;
  height: 60px;
  border-radius:60px;
  background-color: var(--color__secondary);

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.4);

  svg {
    color: var(--color__white);
    width: 28px;
    height: 28px;
  }

  .MuiButton-root {
    border: none;
    padding: 0;
  }
`;
