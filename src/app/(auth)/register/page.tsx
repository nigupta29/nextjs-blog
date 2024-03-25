"use client"

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
import { RegisterSchemaType, registerSchema } from "@/lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react"
import { useForm } from "react-hook-form"

export default function Register() {
  const [isPending, startTransition] = useTransition()

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit = (values: RegisterSchemaType) => {
    console.log(values)
  }

  return (
    <CardWrapper
      heading="Create an account!"
      subheading="Enter your details below to conitnue."
      label="Already have an account!"
      href="/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="John Doe"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
