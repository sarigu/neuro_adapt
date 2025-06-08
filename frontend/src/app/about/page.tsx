import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
      <div className="w-full lg:w-3/4 max-w-lg">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-6">
          Helping every <br/> brain thrive
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          At <span className="font-semibold text-highlight">NeuroAdapt</span>, we believe that learning should work <em>with</em> your brain — not against it.
          Whether you’re neurodivergent or just looking for a better way to study, we’re here to support your unique way of thinking.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          We’re building tools that let students upload study material and choose how they'd like it adapted — from focus-friendly formats to more visual or simplified versions.
          With the help of smart technology and real student feedback, we aim to make studying feel less overwhelming and a lot more empowering.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Because everyone deserves to feel seen, understood, and supported in how they learn.
        </p>
      </div>
      <div className="w-full lg:w-1/4 flex flex-col justify-center items-center">
        <Image
          src="/images/brain.png"
          width={400}
          height={400}
          alt="Illustration of a brain"
        />
      </div>
    </div>
  );
}
