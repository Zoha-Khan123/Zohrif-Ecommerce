import AuthForm from "@/app/components/authForm.tsx/authForm";


export default function LoginPage() {
  return (
    <div>
      <AuthForm
        title="Log in to Exclusive"
        subtitle="Enter your details below"
        mainButtonLabel="Log In"
        showGoogle={false}
        showForgot={true}
        redirectText="Don't have an account?"
        redirectLinkLabel="Sign Up"
        redirectPath="/signup"
        imageSrc="/auth-image.png"
        imageAlt="Login illustration"
      />
    </div>
  );
}
