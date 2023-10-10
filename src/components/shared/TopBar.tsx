import styled from "styled-components";
import ToggleMenuBar from "../ToggleMenuBar";
import Title from "../ui/Title";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import bImage from "./../../assets/mountains-7561636_1280.png";

type TopBarProps = {
  isSearch?: boolean;
};

const TopBar = ({ isSearch }: TopBarProps) => {
  if (isSearch) {
    return (
      <Container>
        <Title type="secondary" content="검색" />
      </Container>
    );
  }

  return (
    <Container>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ToggleMenuBar />
    </Container>
  );
};

export default TopBar;

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
