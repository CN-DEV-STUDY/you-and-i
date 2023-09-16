import styled from "styled-components";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import { BsCalendar2Minus, BsChatHeart, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button } from "@mui/joy";
import React from "react";

type BottomBarProps = {
  setLayout: (layout: "center" | "fullscreen" | undefined) => void;
};
const BottomBar = ({ setLayout }: BottomBarProps) => {
  return (
    <Container>
      <Link to="/">
        <GoHomeFill />
      </Link>
      <Link to="/search">
        <HiOutlineSearch />
      </Link>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setLayout("fullscreen")}
      >
        <AiOutlinePlus />
      </Button>
      <Link to="/plan">
        <BsCalendar2Minus />
      </Link>
      <BsChatHeart />
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

  .MuiButton-root {
    border: none;
    padding: 0;
  }
`;
