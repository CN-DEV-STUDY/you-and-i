import styled from "styled-components";
import profilImg from "../assets/sanibell-bv-xvOML5tdKMk-unsplash.jpg";
import { Avatar, Textarea } from "@mui/joy";

const NewStoryInfo = () => {
  return (
    <Grid>
      <Avatar alt="Remy Sharp" src={profilImg} />
      <div>
        <Textarea
          minRows={1}
          placeholder="Start a new story..."
          sx={{
            border: "none",
            "box-shadow": "none",
            "--Textarea-focusedThickness": "none",
          }}
        />
      </div>
    </Grid>
  );
};

export default NewStoryInfo;

// style
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  padding: 10px 0;

  textarea {
    width: 100%;
  }
`;

const Id = styled.p`
  font-weight: bold;
`;
