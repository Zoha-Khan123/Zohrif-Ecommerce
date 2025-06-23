import AuthForm from "@/app/components/authForm.tsx/authForm";

export default function SignupPage() {
  return (
    <div className="">
      <AuthForm
        title="Create an account"
        subtitle="Enter your details below"
        mainButtonLabel="Create Account"
        showGoogle={true}
        showForgot={false}
        redirectText="Already have an account?"
        redirectLinkLabel="Log In"
        redirectPath="/login"
        imageSrc="/auth-image.png"
        imageAlt="Signup illustration"
      />
    </div>
  );
}
