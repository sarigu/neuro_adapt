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
        <p>Start adapting your material now and take the stress out of studying!</p>
        <p><strong>How it works:</strong></p>
        <ol>
          <li>1. Select your neurodiversity type – so we know the learning strategies that fit you best.</li>
          <li>2. Paste your learning material – it could be text or notes</li>
          <li>3. Get your adapted version – simplified, reorganized, or visually enhanced to make studying easier and more effective.</li>
        </ol>
        <p>No matter the material, we’ll help you focus on what matters and make learning feel less overwhelming.</p>
      </div>

      {/* Right: Adaption Form */}
      <div className="lg:w-1/2 p-5 flex justify-center items-center gradient rounded-3xl overflow-auto">
          <AdaptionForm/>
      </div>
    </PageWrapper>
  );
}
