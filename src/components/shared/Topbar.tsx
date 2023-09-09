import styled from "styled-components";
import Logo from "../ui/Logo";
import ToggleMenuBar from "../ToggleMenuBar";

const Topbar = () => {
  return (
    <Container>
      <Logo />
      <ToggleMenuBar />
    </Container>
  );
};

export default Topbar;

// style
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 55px;
  background-color: var(--color__secondaty);

  :first-child {
    margin-left: auto;
    margin-right: -35px;
  }

  :last-child {
    margin-left: auto;
    margin-right: 10px;
  }
`;
