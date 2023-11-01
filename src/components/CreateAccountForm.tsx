import {Button} from "@/components/ui/Button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/Card"
import {Input} from "@/components/ui/Input"
import {Link, useNavigate} from "react-router-dom";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/Form";
import {saveUserRequest} from "@/services/api/user/api";
import {Loader2} from "lucide-react";
import {Icons} from "@/components/Icons.tsx";
import {useMutation} from "@tanstack/react-query";
import {useDispatch} from "react-redux";
import {openAlertPopup} from "@/slices/popup/alertPopupSlice.ts";

const formSchema = z.object({
  email: z.string().min(1).max(30).email(),
  password: z.string().min(8).max(15),
  confirmPassword: z.string(),
  name: z.string().min(1).max(30),
  nickname: z.string().min(1).max(30),
}).superRefine(({password, confirmPassword}, ctx) => {
  if (password !== confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Passwords do not match",
      path: ["confirmPassword"],
    })
  }
})

const CreateAccountForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      nickname: "",
    },
  })

  const {mutate: submit, isPending} = useMutation({
    mutationFn: saveUserRequest,
    onSuccess: () => {
      // show alert popup and redirect
      dispatch(openAlertPopup({title: "회원가입 완료", content: "회원가입이 완료되었습니다.", onClose: () => navigate("/")}));
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(((form) => submit(form)))}>
        <Card className="rounded-none h-screen mx-auto pt-[1vh]">
          <CardHeader className="space-y-1">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">Create an account</CardTitle>
              <Link to="/"><Icons.close /></Link>
            </div>
            <CardDescription>
              Enter your email below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({field, fieldState}) => (
                <FormItem>
                  <FormLabel htmlFor="email" className="font-bold">Email</FormLabel>
                  <FormControl>
                    <Input {...field} id="email" type="email" placeholder="email@email.com"/>
                  </FormControl>
                  {fieldState.error && <FormDescription className="text-destructive">이메일 형식이 아닙니다.</FormDescription>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field, fieldState}) => (
                <FormItem>
                  <FormLabel htmlFor="password" className="font-bold">Password</FormLabel>
                  <FormControl>
                    <Input {...field} id="password" type="password"/>
                  </FormControl>
                  {fieldState.error && <FormDescription className="text-destructive">비밀번호는 8~16자리까지 입력할 수 있습니다.</FormDescription>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({field, fieldState, formState}) => (
                <FormItem>
                  <FormLabel htmlFor="confirm-password" className="font-bold">Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} id="confirm-password" type="password"/>
                  </FormControl>
                  {form.formState.errors.confirmPassword && <FormDescription className="text-destructive">비밀번호가 일치하지 않습니다.</FormDescription>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({field, fieldState}) => (
                <FormItem>
                  <FormLabel htmlFor="name" className="font-bold">Name</FormLabel>
                  <FormControl>
                    <Input {...field} id="name" type="text"/>
                  </FormControl>
                  {fieldState.error && <FormDescription className="text-destructive">이름을 입력해주세요.</FormDescription>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nickname"
              render={({field, fieldState}) => (
                <FormItem>
                  <FormLabel htmlFor="nickname" className="font-bold">Nickname</FormLabel>
                  <FormControl>
                    <Input {...field} id="nickname" type="text"/>
                  </FormControl>
                  {fieldState.error && <FormDescription className="text-destructive">닉네임을 입력해주세요.</FormDescription>}
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="block pb-auto">
            <Button
              className={`w-full ${isPending ? 'cursor-not-allowed' : ''}`}
              disabled={isPending}
              type="submit"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait...
                </>
              ) : (
                'Create account'
              )}
            </Button>
            <div className="flex mt-4">
              <p>Already have an account?&nbsp;</p>
              <Link to="/login" className="text-blue-600">Sign in</Link>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}

export default CreateAccountForm;