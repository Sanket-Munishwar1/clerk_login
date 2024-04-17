import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
        <h1 className="text-4xl fon-bold mt-20">This is Sign Up Page</h1>
        <SignUp />
    </div>
  )
}