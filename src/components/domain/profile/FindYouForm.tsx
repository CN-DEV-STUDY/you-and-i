import {Form} from "@/components/ui/Form.tsx";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Dialog, DialogContent, DialogFooter, DialogTrigger,} from "@/components/ui/Dialog.tsx";
import {Input} from "@/components/ui/Input.tsx"
import {Label} from "@/components/ui/Label.tsx"
import {Button} from "@/components/ui/Button.tsx";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/Select.tsx";

const findYouSchema = z.object({
  username: z
    .string()
    .min(2, {message: "Username must be at least 2 characters."})
    .max(30, {message: "Username must not be longer than 30 characters."}),
  email: z
    .string({required_error: "Please select an email to display."})
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
})
const findYouForm = () => {

  const form = useForm<z.infer<typeof findYouSchema>>({
    resolver: zodResolver(findYouSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      urls: [],
    }
  })

  const onSubmit = async (values: z.infer<typeof findYouSchema>) => {
    console.log(values)
  }

  return (
    <>
      <Dialog>
        <p className="text-[--color__white]">상대방을 등록하고 you and i를 시작해보세요.</p>
        <DialogTrigger asChild>
          <Button variant="outline">상대방 등록하기</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col gap-2 mt-4">
            <Select defaultValue="email">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="검색 조건을 선택해주세요." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="email">이메일</SelectItem>
                  <SelectItem value="name">이름</SelectItem>
                  <SelectItem value="nickname">닉네임</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              id="name"
              defaultValue=""
              className=""
              placeholder="검색어를 입력해주세요."
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        </form>
      </Form>
    </>
  );
}

export default findYouForm;