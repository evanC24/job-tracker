"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/auth/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";


function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault(); // Prevent default page refresh form submission behavior
    
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn.email({ email, password });
      if (result.error) {
        setError(result.error.message ?? "Failed to sign in")
      } else {
        router.push("/dashboard")
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black">
            Sign in
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter to manage your job applications.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-8">
          <CardContent className="space-y-2">
            {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300 focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-700">Password</Label>
              <Input
                id="password"
                minLength={8}
                type="password"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-300 focus:border-primary focus:ring-primary"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-1">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Signin in..." : "Sign in"}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link className="text-primary font-semibold" href="/sign-up">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default SignIn;
