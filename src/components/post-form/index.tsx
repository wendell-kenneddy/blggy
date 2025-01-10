"use client";

import { Button, ComboboxData, Flex, Grid, NativeSelect, TextInput } from "@mantine/core";
import { RichTextEditor } from "../rich-text-editor";
import StarterKit from "@tiptap/starter-kit";
import { JSONContent, useEditor } from "@tiptap/react";

interface PostFormProps {
  defaultTitle?: string;
  defaultDescription?: string;
  defaultContent?: JSONContent;
  currentStatus?: "published" | "draft" | "archived";
}

export function PostForm({
  defaultTitle,
  defaultDescription,
  defaultContent,
  currentStatus,
}: PostFormProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
    content: defaultContent,
  });
  const statusOptions: ComboboxData = [
    { label: "Publish", value: "published" },
    { label: "Save as draft", value: "draft" },
    ...(currentStatus ? [{ label: "Archive post", value: "archived" }] : []),
  ];

  return (
    <Grid w="100%" component="form">
      <Grid.Col span={8}>
        <Flex direction="column" gap={8}>
          <TextInput defaultValue={defaultTitle} label="Title" required />
          <TextInput defaultValue={defaultDescription} label="Description" required />
          <RichTextEditor editor={editor} />
        </Flex>
      </Grid.Col>

      <Grid.Col span={4} pos="relative">
        <Flex direction="column" gap={8} pos="sticky" mt={25} top={16} right={0}>
          <NativeSelect variant="filled" aria-label="Post status" data={statusOptions} />
          <Button type="submit">Save</Button>
          {currentStatus && (
            <Button
              disabled={currentStatus != "archived"}
              type="button"
              variant="outline"
              color="red"
            >
              Delete
            </Button>
          )}
        </Flex>
      </Grid.Col>
    </Grid>
  );
}
