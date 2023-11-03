import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/Form.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/Card.tsx";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/Button.tsx";
import {Icons} from "@/components/Icons.tsx";
import {Input} from "@/components/ui/Input.tsx";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";
import {loginRequest} from "@/services/api/user/api.ts";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import {COOKIE_NAME, Jwt} from "@/services/types/user/types.ts";
import {useDispatch, useSelector} from "react-redux";
import {login} from "@/slices/user/loginSlice.ts";
import {Loader2} from "lucide-react";
import {Checkbox} from "@/components/ui/Checkbox";
import {RootState} from "@/store.ts";

const items = [
  {
    id: "rememberMe",
    label: "로그인 상태 유지",
  },

] as const

const formSchema = z.object({
  email: z.string().min(1).max(30).email(),
  password: z.string().min(8).max(15),
  rememberMe: z.boolean().optional(),
})

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // redirect to home if user is logged in
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  if (isLoggedIn) {
    navigate("/");
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  const {mutate: submit, isPending} = useMutation({
    mutationFn: loginRequest,
    onSuccess: ({data}) => {
      // set cookie
      const jwt: Jwt = jwtDecode(data.accessToken);
      const in30Minutes = new Date(jwt.exp * 1000);
      Cookies.set(COOKIE_NAME.ACCESS_TOKEN, `Bearer ${data.accessToken}`, {expires: in30Minutes})
      Cookies.set(COOKIE_NAME.EMAIL, data.email, {expires: in30Minutes})
      Cookies.set(COOKIE_NAME.CHAT_ROOM_ID, data.chatRoomId, {expires: in30Minutes})

      // set global state
      dispatch(login())
      // redirect
      navigate("/");
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((form) => submit(form))}>
        <Card className="rounded-none h-screen mx-auto pt-[1vh]">
          <CardHeader className="space-y-1">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">Welcome</CardTitle>
              <Link to="/"><Icons.close/></Link>
            </div>
            <CardDescription>
              Sing in to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button variant="outline">
                <Icons.gitHub className="mr-2 h-4 w-4"/>
                Github
              </Button>
              <Button variant="outline">
                <Icons.google className="mr-2 h-4 w-4"/>
                Google
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
          </CardContent>
          <CardFooter className="pb-auto block">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({field}) => {
                return (
                  <FormItem
                    className="flex flex-row items-start space-x-3 space-y-0 mb-5"
                  >
                    <FormControl>
                      <Checkbox />
                    </FormControl>
                    <FormLabel className="font-normal">
                      로그인 상태 유지
                    </FormLabel>
                  </FormItem>
                )
              }}
            />
            <Button
              className="w-full"
              type="submit"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                  Please wait...
                </>
              ) : (
                'Login'
              )}
            </Button>
            <div className="flex mt-4">
              <p>Don't have an account?&nbsp;</p>
              <Link to="/create-account" className="text-blue-600">Create account</Link>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}

export default Login;
