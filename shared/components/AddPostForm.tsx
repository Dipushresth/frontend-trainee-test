"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useStore } from "@/store/useStore"
import { Plus } from "lucide-react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const schema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .min(3, "Title must be at least 3 characters"),
  body: z
    .string()
    .min(1, "Body is required")
    .min(10, "Body must be at least 10 characters"),
})

type FormData = z.infer<typeof schema>

interface PostFormInterface {
  userId: number
}
export default function AddPostForm({ userId }: PostFormInterface) {
  const [isOpen, setIsOpen] = useState(false)
  const addPost = useStore((state) => state.addPost)

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      body: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    try {
      const newPost = {
        id: Date.now(),
        userId,
        ...data,
      }
      await new Promise((resolve) => setTimeout(resolve, 1000))
      addPost(newPost)
      setIsOpen(false)
      reset()
      toast.success("Post added successfully!", {
        description: `"${data.title}" has been added to your posts.`,
      })
    } catch (error) {
      toast.error("Failed to add post", {
        description: "Something went wrong. Please try again.",
      })
    }
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) reset()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="hover:shadoww flex h-10 items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:cursor-pointer hover:bg-blue-700">
          <Plus className="h-5 w-5" />
          Add New Post
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Add New Post</DialogTitle>
        </DialogHeader>

        <form
          className="flex flex-col gap-4 pt-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="title"
            control={control}
            rules={{
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
            }}
            render={({ field, fieldState }) => (
              <div className="space-y-1">
                <Label className="text-sm font-medium text-slate-700">
                  Title
                </Label>
                <Input
                  {...field}
                  placeholder="Enter post title..."
                  className={`w-full rounded-sm border px-4 py-4 transition-all focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
                    fieldState.error
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-200"
                  }`}
                />
                {fieldState.error && (
                  <p className="mt-1 text-sm text-red-500">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="body"
            control={control}
            rules={{
              required: "Body is required",
              minLength: {
                value: 10,
                message: "Body must be at least 10 characters",
              },
            }}
            render={({ field, fieldState }) => (
              <div className="space-y-1">
                <Label className="text-sm font-medium text-slate-700">
                  Body
                </Label>
                <Textarea
                  {...field}
                  rows={6}
                  placeholder="Enter post content..."
                  className={`focus:ring-bllue-500 w-full resize-none rounded-sm border px-4 py-2 text-sm focus:ring-2 focus:outline-none ${
                    fieldState.error
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-200"
                  }`}
                />
                {fieldState.error && (
                  <p className="mt-1 text-sm text-red-500">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              className="cursor-pointer px-7 py-5"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer bg-blue-600 px-7 py-5 hover:bg-blue-700"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
