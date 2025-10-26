export default function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full flex items-stretch mx-auto lg:flex-row flex-col gap-10 lg:gap-20">
      {children}
    </div>
  );
}
