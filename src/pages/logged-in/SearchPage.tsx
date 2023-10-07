import { Button, Input } from "@mui/joy";
import { HiOutlineSearch } from "react-icons/hi";
import styled from "styled-components";
import TopBar from "../../components/shared/TopBar";
import OtherCoupleCard from "../../components/OtherCoupleCard";

const SearchPage = () => {
  return (
    <>
      <TopBar isSearch={true} />
      <Container>
        <Input
          color="neutral"
          variant="plain"
          sx={{ width: "95%", "--Input-focusedThickness": "none" }}
          startDecorator={<HiOutlineSearch />}
          endDecorator={<Button>검색</Button>}
        />
        <OtherCoupleCard />
        <OtherCoupleCard />
        <OtherCoupleCard />
        <OtherCoupleCard />
        <OtherCoupleCard />
        <OtherCoupleCard />
        <OtherCoupleCard />
        <OtherCoupleCard />
        <OtherCoupleCard />
        <OtherCoupleCard />
        <OtherCoupleCard />
        <OtherCoupleCard />
      </Container>
    </>
  );
};

export default SearchPage;

// style
const Container = styled.div`
  background-color: var(--color__secondary);

  .MuiInput-root {
    margin: 0 auto 10px auto;

    .MuiButton-root {
      background-color: var(--color__primary);
    }
  }
`;
