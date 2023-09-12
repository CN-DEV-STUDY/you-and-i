import { Button, Modal, ModalDialog, ModalDialogProps } from "@mui/joy";
import { List } from "@mui/material";
import styled from "styled-components";
import Title from "./ui/Title";
import NewStoryInfo from "./NewStoryInfo";
import { FunctionComponent, useState } from "react";

type MuiModalProps = {
  layout: ModalDialogProps["layout"] | undefined;
  setLayout: (layout: "center" | "fullscreen" | undefined) => void;
};
const MuiModal = ({ layout, setLayout }: MuiModalProps) => {
  const [newStories, setNewStories] = useState<FunctionComponent | undefined>(
    undefined,
  );

  return (
    <Modal
      autoFocus={false}
      open={!!layout}
      onClose={() => {
        setLayout(undefined);
      }}
    >
      <ModalDialog
        aria-labelledby="dialog-vertical-scroll-title"
        layout={layout}
      >
        <ModalHeader>
          <Button
            onClick={() => setLayout(undefined)}
            variant="plain"
            sx={{ color: "var(--color__text)" }}
          >
            취소
          </Button>
          <Title type="secondary" content="New Story" color="black" />
        </ModalHeader>
        <List
          sx={{
            overflow: "scroll",
            mx: "calc(-1 * var(--ModalDialog-padding))",
            px: "var(--ModalDialog-padding)",
          }}
        >
          {[...Array(1)].map((item, index) => (
            // <ListItem key={index}>
            <NewStoryInfo key={index} onAdd={setNewStories} />
            // </ListItem>
          ))}
        </List>
        <PostButton>게시</PostButton>
      </ModalDialog>
    </Modal>
  );
};

export default MuiModal;

const ModalHeader = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  border-bottom: 1px solid var(--color__light__grey);
  margin-top: -10px;
  padding-bottom: 10px;

  h2 {
    justify-self: center;
  }

  .MuiModalClose-root {
    left: 0;
  }

  .MuiButton-root {
    padding: 0;
    justify-self: start;
    font-size: 16px;
  }
`;

const PostButton = styled.button`
  align-self: flex-end;
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  color: dodgerblue;
`;
