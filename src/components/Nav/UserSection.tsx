import { LoadingSpinner } from "~/components/LoadingSpinner";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { getButtonClasses } from "~/helpers/buttons";

export const NavUserSection = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <LoadingSpinner size={24} />;
  if (isSignedIn) return <UserButton />;

  const buttonClasses = getButtonClasses();
  return (
    <SignInButton>
      <div className={buttonClasses}>Iniciar sesión</div>
    </SignInButton>
  );
};
