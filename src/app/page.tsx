import { Button, Container, Flex, Text, Title } from "@mantine/core";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "blggy",
  description: "Share your ideas and moments with Blggy!",
};

export default function Homepage() {
  return (
    <Container size="xs">
      <Flex direction="column" gap="md" align="center">
        <Title>Share ideas and moments</Title>

        <Image
          priority
          src="/blogging-illustration.svg"
          alt="Illustration of people scrolling blog posts"
          width={250}
          height={125}
        />

        <Text style={{ textAlign: "justify" }}>
          With blggr you can easily develop and publish your ideas, while also receiving inspiration
          from other creations. Sign in now and start creating!
        </Text>

        <Button>Get started</Button>
      </Flex>
    </Container>
  );
}
