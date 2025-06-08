import AdaptionForm from "@/src/components/AdaptionForm";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
      <div className="w-full lg:w-2/4 max-w-lg flex flex-col justify-center space-y-4">
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Learning made <br/> easier for all
          </h1>
          <p>Submit your study text and choose how you learn best. We’ll help shape the material to support your neurodiverse needs — whether you have ADHD, dyslexia, autism, or another learning style.</p>
        </div>
        <Image
          src="/images/computer.png"
          width={600}
          height={300}
          alt="Illustration of an student with a computer"
        />
      </div>
      <div className="w-full lg:w-2/4 flex justify-center">
        <AdaptionForm/>
      </div>
    </div>
  );
}