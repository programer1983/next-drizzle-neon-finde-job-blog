import Container from "@/components/ui/Container";
import Link from "next/link";
import { LuLinkedin } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <Container className="px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-3 text-lg font-semibold">FindTalent</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Connecting talented professionals with innovative companies. Find
              your next carrer opportunity or discover exceptional talent.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-muted-foreground transition-all hover:text-foreground hover:border-b hover:border-foreground"
                  href="#"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground transition-all hover:text-foreground hover:border-b hover:border-foreground"
                  href="#"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground transition-all hover:text-foreground hover:border-b hover:border-foreground"
                  href="#"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-muted-foreground w-full transition-all hover:text-foreground hover:border-b hover:border-foreground"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground w-full transition-all hover:text-foreground hover:border-b hover:border-foreground"
                  href="#"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground w-full transition-all hover:text-foreground hover:border-b hover:border-foreground"
                  href="#"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 md:flex items-center justify-between gap-4 border-t pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FindTalent. All rights reserved.
          </p>
          <div className="translate-y-3 md:translate-y-0 flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <LuLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <FiTwitter className="w-5 h-5" />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <FiGithub className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
