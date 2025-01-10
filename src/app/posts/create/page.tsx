import { PostForm } from "@/components/post-form";
import { Space, VisuallyHidden } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blggy | Create post",
  description: "Develop and share your newest idea.",
};

export default function CreatePostPage() {
  return (
    <>
      <VisuallyHidden>
        <h1>Create post</h1>
      </VisuallyHidden>

      <PostForm />

      <Space h={24} />
    </>
  );
}
