import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}

export default function Button({
  variant = "primary",
  text,
  onClick,
  href,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "py-2 px-6 rounded-full font-medium text-center w-fit cursor-pointer border-2 transition-all duration-300 ease-in-out";

  const variants = {
    primary:
      "bg-black text-white border-black hover:bg-transparent hover:text-black",
    secondary:
      "bg-transparent text-black border-black hover:bg-black hover:text-white",
  };

  const content = <span className="block">{text}</span>;

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {content}
    </button>
  );
}
