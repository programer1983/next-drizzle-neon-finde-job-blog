import Container from "@/components/ui/Container";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <Container className="my-6 flex justify-center">
      <SignIn />
    </Container>
  );
}
