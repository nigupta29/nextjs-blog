import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

export default function CreateBlogForm() {
  return (
    <form className="space-y-4">
      <h3 className="text-3xl font-semibold">Write your thoughts!</h3>
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" placeholder="e.g. A day in my life." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          placeholder={`e.g A regular day!  Never what I’m expecting to hear, but I get it!  It’s always fun to see how other people live and how they fit in all that they do.`}
          className="min-h-52"
        />
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
