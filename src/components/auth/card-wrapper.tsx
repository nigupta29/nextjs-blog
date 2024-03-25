import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { ReactNode } from "react"
import ProvidersLogin from "./providers-login"

type CardWrapperProps = {
  children: ReactNode
  heading: string
  subheading: string
}

export default function CardWrapper({
  children,
  heading,
  subheading
}: CardWrapperProps) {
  return (
    <Card className="mx-auto w-full max-w-xl">
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
        <CardDescription>{subheading}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
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
      </CardContent>

      <CardFooter>
        <ProvidersLogin />
      </CardFooter>
    </Card>
  )
}
