import { createPost } from "@/actions/actions";

export default function Form() {
  return (
    <form
        action={createPost}
        className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
      >
        <input
          name="title"
          placeholder="Title"
          required
          className="border rounded px-3 h-10"
          type="text"
        />
        <textarea
          name="body"
          placeholder="Blog Post"
          className="border rounded px-3"
          required
          rows={6}
        />
        <button className="h-10 bg-blue-500 px-5 rounded text-white">
          Create
        </button>
      </form>
  )
}