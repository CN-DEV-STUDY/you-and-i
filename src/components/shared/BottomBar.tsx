import styled from "styled-components";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
const BottomBar = () => {
  return (
    <Container>
      <GoHomeFill />
      <HiOutlineSearch />
      <AiOutlinePlus />
      <AiOutlineHeart />
      <BsPerson />
    </Container>
  );
};

export default BottomBar;

// style
const Container = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 45px;
  background-color: var(--color__primary);

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  svg {
    color: var(--color__white);
    width: 28px;
    height: 28px;
  }
`;
