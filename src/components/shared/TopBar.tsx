import styled from "styled-components";
import Logo from "../ui/Logo";
import ToggleMenuBar from "../ToggleMenuBar";

const TopBar = () => {
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

  :first-child {
    margin-left: auto;
    margin-right: -35px;
  }

  :last-child {
    margin-left: auto;
    margin-right: 10px;
  }
`;
