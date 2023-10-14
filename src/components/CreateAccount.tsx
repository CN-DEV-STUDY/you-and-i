import { Icons } from "@/components/Icons"
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
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import {useEffect, useState} from "react";
import {Loader2} from "lucide-react";
import AlertPopup from "@/components/shared/AlertPopup";
import {useDispatch} from "react-redux";
import {login} from "@/slices/user/loginSlice";

interface Jwt {
  exp: number;
  iat: number;
  sub: string;
  id: number;
  iss: string;
}

const formSchema = z.object({
  email: z.string().min(1).max(30).email(),
  password: z.string().min(8).max(15),
  confirmPassword: z.string().min(8).max(15),
  name: z.string().min(1).max(30),
  nickname: z.string().min(1).max(30),
})

const CreateAccount = () => {
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAlertPopup, setShowAlertPopup] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch()

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


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    const { data } = await saveUserRequest({
      email: values.email,
      password: values.password,
      name: values.name,
      nickname: values.nickname,
    });

    // set cookie
    const jwt: Jwt = jwtDecode(data.accessToken);
    const in30Minutes = new Date(jwt.exp * 1000);
    Cookies.set('accessToken', data.accessToken, { expires: in30Minutes })

    // set global state
    dispatch(login())

    // show alert popup and redirect
    setShowAlertPopup(true);
  }

  return (
    <Form {...form}>
      {showAlertPopup && <AlertPopup message="회원가입이 완료되었습니다." onClose={() => navigate("/")} />}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="rounded-none h-screen mx-auto pt-[5vh]">
          <Link to="/" className="px-6">home</Link>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>
              Enter your email below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button variant="outline">
                <Icons.gitHub className="mr-2 h-4 w-4"/>
                Github
              </Button>
              <Button variant="outline" asChild>
                <Link to="/social-login">
                  <Icons.google className="mr-2 h-4 w-4"/>
                  Google
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"/>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
              </div>
            </div>
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
          <CardFooter className="pb-auto">
            <Button
              className={`w-full ${canSubmit && isLoading ? 'cursor-not-allowed' : ''}`}
              disabled={!canSubmit || isLoading}
              type="submit"
            >
              {canSubmit && isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait...
                </>
              ) : (
                'Create account'
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}

export default CreateAccount;