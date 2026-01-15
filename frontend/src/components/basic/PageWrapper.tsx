export default function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[75vh] w-full flex items-stretch justify-between mx-auto lg:flex-row flex-col gap-10 lg:gap-20">
      {children}
    </div>
  );
}
