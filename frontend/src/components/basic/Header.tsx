import Link from "next/link";
import Button from "@/components/basic/Button";

export default function Header() {
  return (
    <header className="lg:fixed lg:inset-0 w-full h-fit">
      <div className="px-6 lg:px-10 py-12 md:py-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <Link href="/">
          <span className="text-4xl md:text-2xl font-semibold">NeuroAdapt</span>
        </Link>
        <nav className="flex flex-row gap-4">
          <Button 
            href="/adapt" 
            text="Get Started"
          /> 
          <Button 
            href="/about" 
            text="About"
            variant="secondary"
          /> 
        </nav>
      </div>
    </header>
  );
}
