import Image from 'next/image';
import Button from "@/components/basic/Button";
import PageWrapper from "@/components/basic/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      {/* Left: Text & CTA */}
      <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Learning made <br /> easier for all
        </h1>
        <p className="text-lg text-gray-700">
          Submit your study text and choose how you learn best. We’ll help shape the material to support your neurodiverse needs — whether you have ADHD, dyslexia, autism, or another learning style.
        </p>
        <Button 
          href="/adapt" 
          text="Get Started →"
        /> 
      </div>

      {/* Right: Image */}
      <div className="lg:w-1/2 flex justify-center items-center gradient rounded-3xl">
        <div className="h-full w-full max-w-md flex items-center justify-center">
          <Image
            src="/images/computer.png"
            width={600}
            height={400}
            alt="Illustration of a student with a computer"
            className="object-cover h-auto w-full"
          />
        </div>
      </div>
    </PageWrapper>
  );
}
