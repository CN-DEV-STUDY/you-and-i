import styled from "styled-components";
import profilImg from "../assets/sanibell-bv-xvOML5tdKMk-unsplash.jpg";
import { Avatar, Textarea } from "@mui/joy";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { MdAttachFile } from "react-icons/md";

type NewStoryInfoProps = {
  onAdd: (newStories: FunctionComponent | undefined) => void;
};

const NewStoryInfo = ({ onAdd }: NewStoryInfoProps) => {
  // state
  const [value, setValue] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string>("");

  // ref
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  // 컴포넌트가 마운트되면 textarea에 포커스
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const resizeTextarea = () => {
    // @ts-ignore
    textareaRef.current.style.height = "auto";
    // @ts-ignore
    textareaRef.current.style.height = textareaRef.current?.scrollHeight + "px";
  };
  useEffect(resizeTextarea, [value]);

  const onFileClick = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);

      const objectUrl = URL.createObjectURL(file);
      setPreviewURL(objectUrl);
    }
  };

  return (
    <>
      <Grid>
        <Avatar alt="Remy Sharp" src={profilImg} />
        <div>
          <Id>sdf</Id>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            ref={textareaRef}
            rows={1}
            placeholder="Start a new story"
          />
        </div>
        <VerticalLine />
        {file ? (
          <ImageContainer>
            <img src={previewURL} width="300px" />
          </ImageContainer>
        ) : (
          <MdAttachFile onClick={onFileClick} />
        )}
        <Avatar
          alt="Remy Sharp"
          src={profilImg}
          sx={{ width: "28px", height: "28px" }}
        />
        <PlaceHolder>Add a new Story</PlaceHolder>
      </Grid>
      <input
        type="file"
        hidden
        ref={fileRef}
        onChange={(e) => onFileChange(e)}
      />
    </>
  );
};

export default NewStoryInfo;

// style
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  padding: 10px 0;
  column-gap: 10px;
  row-gap: 10px;

  div:nth-child(1) {
    justify-self: center;
    align-self: center;
  }
  div:nth-child(5) {
    justify-self: center;
    align-self: center;
  }

  textarea {
    width: 90%;
    resize: none; /* 사용자가 크기를 조정하지 못하도록 비활성화 */
    font-size: 16px;
    background-color: transparent;

    border: none;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  textarea:focus {
    border: none;
  }

  svg {
    margin-right: auto;
  }
`;

const Id = styled.p`
  font-weight: bold;
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 100%;
  border: 1px solid var(--color__light__grey);

  justify-self: center;
`;

const PlaceHolder = styled.p`
  color: var(--color__grey);
  font-size: 14px;
`;

const ImageContainer = styled.div`
  height: 100%;
  object-fit: contain;
`;
