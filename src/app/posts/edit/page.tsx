import { PostForm } from "@/components/post-form";
import { Space, VisuallyHidden } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blggy | Edit #17",
  description: "Edit post.",
};

export default function EditPostPage() {
  return (
    <>
      <VisuallyHidden>
        <h1>Edit post #17</h1>
      </VisuallyHidden>

      <PostForm
        defaultTitle="Post #17"
        defaultDescription="Amazing post about Android #17"
        currentStatus="published"
      />

      <Space h={24} />
    </>
  );
}
