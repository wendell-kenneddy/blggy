import { Button, Center, Flex } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { ThemeButton } from "../theme-button";

export function Header() {
  return (
    <Center w="full" h={64} bg="dark">
      <Flex w="100%" maw={1024} align="center" justify="space-between">
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo.png" width={43} height={16} alt="Logo" />
        </Link>

        <Flex align="center" gap="xs">
          <Button c="teal" variant="outline">
            Sign in
          </Button>

          <ThemeButton />
        </Flex>
      </Flex>
    </Center>
  );
}
