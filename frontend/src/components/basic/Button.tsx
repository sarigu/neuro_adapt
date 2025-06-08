interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const Button = ({
  variant = "primary",
  text,
  onClick,
  type = "button", 
}: ButtonProps) => {
  const baseStyles =
    "py-3 px-4 rounded-full transition font-medium border-2 text-center w-full";

  const variants = {
    primary:
      "bg-black text-white hover:bg-transparent hover:text-black hover:border-black",
    secondary:
      "bg-white text-black border-black hover:bg-black hover:text-white",
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {text}
    </button>
  );
};
