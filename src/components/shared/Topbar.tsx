import styled from "styled-components";
import {GiHamburgerMenu} from 'react-icons/gi'
import Logo from "../ui/Logo";

const Topbar = () => {
  return <Container>
    <Logo/>
    <GiHamburgerMenu size={24} color="var(--color__white)"/>
  </Container>
}

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
    position: absolute;
  }
  
  :last-child {
    margin-left: auto;
    margin-right: 20px;
  }
`;