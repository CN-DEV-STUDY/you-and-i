import styled from "styled-components";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/Avatar";
import bImage from "./../../assets/mountains-7561636_1280.png";
import HamburgerMenu from "@/components/shared/HamburgerMenu.tsx";
import {memo} from "react";

const TopBar = () => {
  return (
    <Container>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <HamburgerMenu />
    </Container>
  );
};

export default memo(TopBar);

// style
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  background: var(--color__secondary) url(${bImage}) no-repeat center 0 / cover;
  padding: 40px 20px 118px

`;
