import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-8">
      <nav className="flex max-w-2xl mx-auto gap-4 items-center">
        <Link href="/" className="font-black uppercase flex items-center gap-1">
          <Image className="h-6 w-auto" src="/logo.svg" alt="Next Blog" width="100" height="50" />
          <span>Next Blog</span>
        </Link>
        <Link href="/" className="text-right">All posts</Link>
      </nav>
    </header>
  );
}
