import Link from "next/link";
import Button from "@/components/basic/Button";

export default function Header() {
  return (
    <header className="w-full h-fit py-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        <Link href="/">
          <span className="text-2xl md:text-xl font-semibold">NeuroAdapt</span>
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
    </header>
  );
}
