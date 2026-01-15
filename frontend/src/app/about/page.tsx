import Image from 'next/image';
import PageWrapper from "@/components/basic/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      {/* Left: Text */}
      <div className="lg:w-1/2 flex flex-col justify-center space-y-6 max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Helping every <br/> brain thrive
        </h1>
        <p>
          At <strong>NeuroAdapt</strong>, we believe that learning should work with your brain — not against it.
          Whether you’re neurodivergent or just looking for a better way to study, we’re here to support your unique way of thinking.
        </p>
        <p>
          We’re building tools that let students upload study material and choose how they'd like it adapted — from focus-friendly formats to more visual or simplified versions.
          With the help of smart technology and real student feedback, we aim to make studying feel less overwhelming and a lot more empowering.
        </p>
        <p>
          Because everyone deserves to feel seen, understood, and supported in how they learn.
        </p>
      </div>

      {/* Right: Image */}
      <div className="lg:w-1/2 flex justify-center items-center gradient rounded-3xl">
        <div className="h-full w-full max-w-md flex items-center justify-center">
          <Image
            src="/images/hands.png"
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
