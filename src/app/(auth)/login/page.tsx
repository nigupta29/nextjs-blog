"use client"

import AuthMessage from "@/components/auth/auth-message"
import CardWrapper from "@/components/auth/card-wrapper"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginSchemaType, loginSchema } from "@/lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"

export default function Login() {
  const [error, setError] = useState("")
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = (values: LoginSchemaType) => {
    setError("")
    startTransition(async () => {
      try {
        const { email, password } = values
        const isLoggedIn = await signIn("credentials", {
          email,
          password,
          redirect: false
        })

        if (isLoggedIn?.error) {
          setError(isLoggedIn.error)
        } else {
          router.push("/")
        }
      } catch (error) {
        setError("Something went wrong!")
      }
    })
  }

  return (
    <CardWrapper
      heading="Welcome back!"
      subheading="Enter your credentials below to conitnue."
      label="Don't have an account?"
      href="/register"
    >
      <Form {...form}>
        <AuthMessage type="error" message={error} />
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="john.doe@test.com"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="*****"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
