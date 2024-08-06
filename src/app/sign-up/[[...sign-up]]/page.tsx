import Container from "@/app/Container";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-full my-5">
      <Container>
      <SignUp afterSignOutUrl="/" />
      </Container>
    </div>
  );
}