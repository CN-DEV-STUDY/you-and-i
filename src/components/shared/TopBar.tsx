import styled from "styled-components";
import Logo from "../ui/Logo";
import ToggleMenuBar from "../ToggleMenuBar";
import { InputOutlined } from "@mui/icons-material";
import Title from "../ui/Title";

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
      <Logo />
      <ToggleMenuBar />
    </Container>
  );
};

export default TopBar;

// style
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;

  width: 100%;
  height: 55px;

  background-color: var(--color__secondary);

  :first-child {
    margin-left: auto;
    margin-right: -35px;
  }

  :last-child {
    margin-left: auto;
    margin-right: 10px;
  }
`;
