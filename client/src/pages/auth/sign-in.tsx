import SignInForm from "./_component/signin-form";
import Logo from "@/components/logo/logo";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-6">
        
        {/* Logo */}
        <div className="flex justify-center">
          <Logo url="/" />
        </div>

        {/* Form */}
        <div className="w-full">
          <SignInForm />
        </div>

      </div>
    </div>
  );
};

export default SignIn;