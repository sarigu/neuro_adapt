import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-0 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-semibold">NeuroAdapt</h1>
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>
      </div>
    </header>
  );
}
