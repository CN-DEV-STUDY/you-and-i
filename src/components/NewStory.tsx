import styled from "styled-components";
import profilImg from "../assets/sanibell-bv-xvOML5tdKMk-unsplash.jpg";
import {Avatar} from "@mui/joy";
import React, { useEffect, useRef, useState } from "react";
import { MdAttachFile } from "react-icons/md";
import {Textarea} from "@/components/ui/Textarea.tsx";
import {Input} from "@/components/ui/Input.tsx";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {Form, FormControl, FormField, FormItem} from "@/components/ui/Form.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {Loader2} from "lucide-react";
import {Label} from "@/components/ui/Label.tsx";
import autosize from "autosize";
import {saveStoryRequest} from "@/services/api/story/api.ts";

const formSchema = z.object({
  content: z.string().min(1).max(50),
})

const NewStory = () => {
  // state
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  // ref
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  // textarea에 autosize 적용
  useEffect(() => {
    // @ts-ignore
    autosize(textareaRef.current);
    return () => {
      // @ts-ignore
      autosize.destroy(textareaRef.current);
    };
  }, []);

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
      content: "",
    }
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setDisabled((prevState => !prevState));

    console.log(file);

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    const data = new FormData();
    data.append("content", values.content);
    // data.append("image", file as Blob);

    saveStoryRequest(data);

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Grid>
          <div className="h-full">
            <Avatar alt="Something when wrong" src={profilImg} />
            <VerticalLine />
          </div>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <Label className="font-bold">호날두</Label>
                <FormControl>
                  <Textarea
                    {...field}
                    ref={textareaRef}
                    name="content"
                    placeholder="Start a new story"
                    className="border-transparent min-h-[20px] overflow-visible px-0 py-0 focus-border-transparent focus-visible:outline-none focus-visible:right-0 focus-visible:ring-transparent focus-visible:ring-offset-0 focus:ring-0"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {file ? (
            <ImageContainer>
              <img src={previewURL} width="95%" alt="cannot upload an image" />
            </ImageContainer>
          ) : (
            <MdAttachFile onClick={onFileClick} />
          )}
        </Grid>
        <Input
          type="file"
          name="image"
          hidden
          ref={fileRef}
          onChange={(e) => onFileChange(e)}
          value=""
        />
        <Button disabled={disabled} className="float-right mt-8">
          {disabled ?
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin"/>LOADING...
            </>
            : "Upload"
          }
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

  div:nth-child(1) {
    justify-self: center;
    align-self: start;
    margin-top: 5px;
    
    grid-row: 1/3;

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

const VerticalLine = styled.div`
  width: 1px;

  height: 100%;
  border: 1px solid var(--color__light__grey);
  margin: 20px auto;
  
`;

const ImageContainer = styled.div`
  height: 100%;
  object-fit: contain;
`;
