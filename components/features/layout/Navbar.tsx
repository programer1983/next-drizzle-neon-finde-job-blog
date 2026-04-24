import { Briefcase } from "lucide-react";
import Link from "next/link";
import NavbarActions from "./NavbarActions";

export default function Navbar() {
  return (
    <header className="stiky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="h-16 max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="flex items-center justify-center h-6 w-6 sm:h-9 sm:w-9 rounded-lg bg-primary text-primary-foreground">
              <Briefcase className="h-3 w-3 sm:h-5 sm:w-5" />
            </div>
            <span className="text-lg sm:text-[23px] font-bold tracking-tight">
              FindTalent
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              className="relative hidden md:block text-[18px] font-medium transition-all duration-500 hover:opacity-80 
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:h-[1px] after:w-full after:bg-transparent after:transition-all
                hover:after:bg-current after:duration-500"
              href="/"
            >
              Browse Jobs
            </Link>
            <Link
              className="relative hidden md:block text-[18px] font-medium transition-all duration-500 hover:opacity-80 
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:h-[1px] after:w-full after:bg-transparent after:transition-all
                hover:after:bg-current after:duration-500"
              href="/post-job"
            >
              Post A Job
            </Link>
          </nav>
        </div>
        <NavbarActions />
      </div>
    </header>
  );
}
