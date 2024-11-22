"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import images from "@/constants/images"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

const formSchema = z.object({
  emailOrPhone: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Email must be at least 2 characters.",
  }),
})

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailOrPhone: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="flex cursor-pointer">
      <div className="flex min-w-[900px] border-r bg-cover bg-center" style={{backgroundImage : `url(${images.LoginImage.src})`}}>

      </div>
      <div className='flex w-full justify-center items-center min-h-screen border-slate-100'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center justify-center w-full space-y-8 border-slate-100">
            <img src={images.AmuzeLogo.src} alt="Logo" className="w-[100px] h-[100px] animate-bounce" />
            <FormField
              control={form.control}
              name="emailOrPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Email or Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email or phone" {...field} className="w-[300px] h-[50px] shadow-md bg-blue-100" />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="relative">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Password</FormLabel>
                    <FormControl>
                      <Input type={showPassword ? "text" : "password"} placeholder="Enter your password" {...field} className="w-[300px] h-[50px] shadow-md bg-blue-100 pr-10" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <button
                type="button"
                className="absolute inset-y-14 right-0 flex items-center px-2 text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
            <Button className="bg-blue-500 w-[150px] hover:bg-blue-600" type="submit">Login</Button>

          </form>
        </Form>
      </div>
    </div>

  )
}
