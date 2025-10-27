"use client";

import { useState } from "react";
import Button from "@/components/basic/Button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const neuroTypes = [
  "ADHD",
  "Autism",
  "Dyslexia",
  "Dyscalculia",
  "Dyspraxia"
];

export default function AdaptionForm() {
  const [selectedNeuroTypes, setSelectedNeuroTypes] = useState<string[]>([]);
  const [learningMaterial, setLearningMaterial] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [adaptedLearningMaterial, setAdaptedLearningMaterial] = useState<string | null>(null);

  const toggleType = (type: string) => {
    setSelectedNeuroTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);
    setAdaptedLearningMaterial(null);
    setIsLoading(true);

    try {
      if (selectedNeuroTypes.length === 0 || !learningMaterial) {
        setError("Please select a neurotype and paste your learning material here.");
        return;
      }

      const response = await fetch("http://localhost:4000/adapt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedNeuroTypes, learningMaterial }),
      });

      if (!response.ok) throw new Error("Something went wrong. Please try again.");

      const data = await response.json();
      setAdaptedLearningMaterial(data.adaptedLearningMaterial || "No adapted content returned.");
    } catch (err: any) {
      setError(err.message || "Unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setSelectedNeuroTypes([]);
    setLearningMaterial("");
    setAdaptedLearningMaterial(null);
    setError(null);
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg flex flex-col justify-start">
      {isLoading ? (
        <div>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-center">One moment. We are adapting your content…</p>
        </div>
      ) : error ? (
        <div className="text-center space-y-4 text-red-600">
          <p>{error}</p>
          <Button
            text="Try again"
            variant="secondary"
            onClick={reset}
          />
        </div>
      ) : adaptedLearningMaterial ? (
        <div className="space-y-4">
  <h2 className="text-xl font-bold">Your adapted text</h2>
  <div className="bg-gray-100 p-4 rounded-lg max-h-[400px] overflow-auto prose prose-sm">
     <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {adaptedLearningMaterial}
  </ReactMarkdown>
  </div>
  <Button
    text="Try another"
    variant="secondary"
    onClick={reset}
  />
</div>

      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <fieldset>
            <legend className="font-semibold mb-2">
              Select your neurodiverse types
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {neuroTypes.map((type) => (
                <label
                  key={type}
                  className={`flex items-center p-3 rounded-lg border cursor-pointer transition ${
                    selectedNeuroTypes.includes(type)
                      ? "border-highlight bg-highlight/10"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="form-checkbox text-highlight mr-3"
                    checked={selectedNeuroTypes.includes(type)}
                    onChange={() => toggleType(type)}
                  />
                  <span className="text-gray-800">{type}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label className="font-semibold">
              Add your learning material
            </label>
            <textarea
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight resize-y min-h-[160px]"
              value={learningMaterial}
              onChange={(e) => setLearningMaterial(e.target.value)}
              placeholder="Paste a text or notes you’re working with"
              required
            />
          </div>
          <Button
            text="Start adaptation →"
            variant="primary"
            type="submit"
          />
        </form>
      )}
    </div>
  );
}
