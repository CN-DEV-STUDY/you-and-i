import { Icons } from "@/components/Icons"
import { Button } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import {Link} from "react-router-dom";
import * as z from "zod";

// const formSchema = z.object({
//   email: z.string().min(1).max(30).email(),
//   password: z.string().min(1).max(30),
// })

const CreateAccount = () => {

  // const form

  return (
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
            <Icons.gitHub className="mr-2 h-4 w-4" />
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
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Confirm Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="pb-auto">
        <Button className="w-full">Create account</Button>
      </CardFooter>
    </Card>
  )
}

export default CreateAccount;