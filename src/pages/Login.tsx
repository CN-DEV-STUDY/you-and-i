import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/Form.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/Card.tsx";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/Button.tsx";
import {Icons} from "@/components/Icons.tsx";
import {Input} from "@/components/ui/Input.tsx";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().min(1).max(30).email(),
  password: z.string().min(8).max(15),
})

function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("values", values)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="rounded-none h-screen mx-auto pt-[1vh]">
            <CardHeader className="space-y-1">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl">Welcome</CardTitle>
                <Link to="/"><Icons.close /></Link>
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
            </CardContent>
            {/*<CardFooter className="pb-auto">*/}
            {/*  <Button*/}
            {/*    className={`w-full ${canSubmit && isLoading ? 'cursor-not-allowed' : ''}`}*/}
            {/*    disabled={!canSubmit || isLoading}*/}
            {/*    type="submit"*/}
            {/*  >*/}
            {/*    {canSubmit && isLoading ? (*/}
            {/*      <>*/}
            {/*        <Loader2 className="mr-2 h-4 w-4 animate-spin" />*/}
            {/*        Please wait...*/}
            {/*      </>*/}
            {/*    ) : (*/}
            {/*      'Create account'*/}
            {/*    )}*/}
            {/*  </Button>*/}
            {/*</CardFooter>*/}
            <CardFooter>
              <p>Don't have an account?&nbsp;</p>
              <Link to="/create-account" className="text-blue-600">Create account</Link>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
}

export default Login;
