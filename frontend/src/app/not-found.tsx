import PageWrapper from "@/components/basic/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Page Not Found</h1>
      </div>
    </PageWrapper>
  );
}