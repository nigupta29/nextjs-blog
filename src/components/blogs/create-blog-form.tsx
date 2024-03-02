"use client"

import { CreateFormState, createBlog } from "@/lib/actions"
import { useFormState } from "react-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

export default function CreateBlogForm() {
  const initialState: CreateFormState = { message: null, errors: {} }
  const [state, dispatch] = useFormState(createBlog, initialState)

  return (
    <form action={dispatch} className="space-y-4">
      <h3 className="text-3xl font-semibold">Write your thoughts!</h3>
      {state?.message && (
        <p className="text-sm text-destructive">{state.message}</p>
      )}
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          placeholder="e.g. A day in my life."
          aria-describedby="title-error"
        />
        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.title?.map((error: string) => (
            <p className="text-sm text-destructive" key={error}>
              {error}
            </p>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          placeholder={`e.g A regular day!  Never what I’m expecting to hear, but I get it!  It’s always fun to see how other people live and how they fit in all that they do.`}
          className="min-h-52"
          aria-describedby="content-error"
        />
        <div id="content-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.content?.map((error: string) => (
            <p className="text-sm text-destructive" key={error}>
              {error}
            </p>
          ))}
        </div>
      </div>

      <div className="space-x-2">
        <Button type="submit">Publish</Button>
        <Button type="reset" variant={"outline"}>
          Clear
        </Button>
      </div>
    </form>
  )
}
