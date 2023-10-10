import styled from "styled-components";
import { Avatar, Button } from "@mui/joy";
import profilImg from "./../assets/sanibell-bv-xvOML5tdKMk-unsplash.jpg";

const OtherCoupleCard = () => {
  return (
    <Grid>
      <Avatar alt="Remy Sharp" src={profilImg} />
      <div>
        <Id>bebe_rara_sisters</Id>
        <Name>rahee</Name>
        <Follower>팔로워 85명</Follower>
      </div>
      <div>
        <Button>Follow</Button>
      </div>
    </Grid>
  );
};

export default OtherCoupleCard;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;

  padding: 10px 20px;
  border-bottom:  0.5px solid var(--color__secondary);

  .MuiButton-root {
    padding: 5px 37px;
    background-color: var(--color__secondary);
  }
`;

const Id = styled.p`
  font-weight: bold;
  color: var(--color__white);
`;

const Name = styled.p`
  color: var(--color__tertiary);
  margin-bottom: 10px;
`;
const Follower = styled.p`
  color: var(--color__tertiary);
`;
