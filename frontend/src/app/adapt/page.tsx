import PageWrapper from "@/components/basic/PageWrapper";
import AdaptionForm from "@/components/AdaptionForm";

export default function Adapt() {
  return (
    <PageWrapper>
      {/* Left: Text*/}
      <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Adapt your text
        </h1>
        <p className="text-lg text-gray-700">
          Submit your study text and choose how you learn best. We’ll help shape the material to support your neurodiverse needs — whether you have ADHD, dyslexia, autism, or another learning style.
        </p>
      </div>

      {/* Right: Adaption Form */}
      <div className="lg:w-1/2 p-5 flex justify-center items-center gradient rounded-3xl overflow-auto">
          <AdaptionForm/>
      </div>
    </PageWrapper>
  );
}
