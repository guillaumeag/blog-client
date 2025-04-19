import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center py-4">
      <p className="text-gray-500 text-xs">© {new Date(Date.now()).getFullYear()} Next.js Blog. All rights reserved.</p>
      <p className="text-gray-500 text-xs">Powered by <Link href="https://nextjs.org/" className="underline">Next.js</Link>.</p>
    </footer>
  );
}