import { Button } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import {Link, useNavigate} from "react-router-dom";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/Form";
import {saveUserRequest} from "@/services/api/user/api";
import {useEffect, useState} from "react";
import {Loader2} from "lucide-react";
import AlertPopup from "@/components/shared/AlertPopup";
import {Icons} from "@/components/Icons.tsx";
import {useMutation} from "@tanstack/react-query";

const formSchema = z.object({
  email: z.string().min(1).max(30).email(),
  password: z.string().min(8).max(15),
  confirmPassword: z.string().min(8).max(15),
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

const CreateAccount = () => {
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [showAlertPopup, setShowAlertPopup] = useState<boolean>(false);

  const navigate = useNavigate();

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

  useEffect(() => {
    form.formState.isValid ? setCanSubmit(true) : setCanSubmit(false);
  }, [form.formState.isValid])

  const {mutate: submit, isPending} = useMutation({
    mutationFn: saveUserRequest,
    onSuccess: () => {
      // show alert popup and redirect
      setShowAlertPopup(true);
    }
  })

  return (
    <Form {...form}>
      {showAlertPopup && <AlertPopup message="회원가입이 완료되었습니다." onClose={() => navigate("/")} />}
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
              render={({field}) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input {...field} id="email" type="email" placeholder="email@email.com"/>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <FormControl>
                    <Input {...field} id="password" type="password"/>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({field}) => (
                <FormItem>
                  <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} id="confirm-password" type="password"/>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <FormControl>
                    <Input {...field} id="name" type="text"/>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nickname"
              render={({field}) => (
                <FormItem>
                  <FormLabel htmlFor="nickname">Nickname</FormLabel>
                  <FormControl>
                    <Input {...field} id="nickname" type="text"/>
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="block pb-auto">
            <Button
              className={`w-full ${canSubmit && isPending ? 'cursor-not-allowed' : ''}`}
              disabled={!canSubmit || isPending}
              type="submit"
            >
              {canSubmit && isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait...
                </>
              ) : (
                'Create account'
              )}
            </Button>
            <div className="flex mt-2">
              <p>Already have an account?&nbsp;</p>
              <Link to="/login" className="text-blue-600">Sign in</Link>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}

export default CreateAccount;