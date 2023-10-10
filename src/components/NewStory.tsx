import styled from "styled-components";
import profilImg from "../assets/sanibell-bv-xvOML5tdKMk-unsplash.jpg";
import { Avatar } from "@mui/joy";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { MdAttachFile } from "react-icons/md";
import {Textarea} from "@/components/ui/Textarea.tsx";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/Form.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {Loader2} from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

type NewStoryProps = {
  onAdd: (newStories: FunctionComponent | undefined) => void;
};

const NewStory = ({ onAdd }: NewStoryProps) => {
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

  // 1. Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    }
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Grid>
          <Avatar alt="Remy Sharp" src={profilImg} />
            <FormField
              control={form.control}
              name="username"
              render={() => (
                <FormItem>
                  <FormLabel className="font-bold">호날두</FormLabel>
                  <FormControl>
                    <Textarea
                      ref={textareaRef}
                      rows={1}
                      placeholder="Start a new story"
                      className="border-transparent min-h-[20px] px-0 py-0 focus-border-transparent focus-visible:outline-none focus-visible:right-0 focus-visible:ring-transparent focus-visible:ring-offset-0 focus:ring-0"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          <VerticalLine />
          {file ? (
            <ImageContainer>
              <img src={previewURL} width="95%" />
            </ImageContainer>
          ) : (
            <MdAttachFile onClick={onFileClick} />
          )}
          {/*<Avatar*/}
          {/*  alt="Remy Sharp"*/}
          {/*  src={profilImg}*/}
          {/*  sx={{ width: "28px", height: "28px" }}*/}
          {/*/>*/}
          {/*<PlaceHolder>Add a new Story</PlaceHolder>*/}
        </Grid>
        <input
          type="file"
          hidden
          ref={fileRef}
          onChange={(e) => onFileChange(e)}
        />
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </form>
    </Form>
  );
};

export default NewStory;

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
