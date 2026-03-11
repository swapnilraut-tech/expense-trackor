import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
  <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6 dark:border-gray-600 dark:bg-gray-800">
  <div className="mx-auto w-full max-w-md rounded-lg border border-gray-300 bg-gray-100 p-6 dark:border-gray-600 dark:bg-gray-800">

      <SignIn />

  </div>);
  
}
