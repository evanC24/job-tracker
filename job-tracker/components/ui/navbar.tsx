import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-primary"
        >
          <Briefcase />
          Activity Tracker
        </Link>
        <div className="items-center gap-4 ">
          <Link href={"/sign-in"} className="text-gray-600 hover:text-black">
            <Button variant={"ghost"}>Sign In</Button>
          </Link>
          <Link href={"/sign-up"} className="bg-primary hover:bg-primary/90">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
