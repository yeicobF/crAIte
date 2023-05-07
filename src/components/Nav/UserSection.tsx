import { LoadingSpinner } from "~/components/LoadingSpinner";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "~/components/Button";

export const NavUserSection = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <LoadingSpinner size={24} />;
  if (isSignedIn) return <UserButton />;

  return (
    <Button as="div">
      <SignInButton>Iniciar sesión</SignInButton>
    </Button>
  );
};
