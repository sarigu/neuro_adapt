"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Button from "@/components/basic/Button";

const neuroTypes = [
  "ADHD",
  "Autism",
  "Dyslexia",
  "Dyscalculia",
  "Dyspraxia"
];

export default function AdaptionForm() {
  const [selectedNeuroTypes, setSelectedNeuroTypes] = useState<string[]>([]);
  const [studyText, setStudyText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [adaptedText, setAdaptedText] = useState<string | null>(null);

  const toggleType = (type: string) => {
    setSelectedNeuroTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    setAdaptedText(null);

    try {
      if (selectedNeuroTypes.length === 0 || !studyText) {
        setError("Please select a neurotype and enter your study text.");
        return;
      }

      const response = await fetch("http://localhost:4000/adapt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedNeuroTypes, studyText }),
      });

      if (!response.ok) throw new Error("Something went wrong. Please try again.");

      const data = await response.json();
      setAdaptedText(data.adaptedText || "No adapted content returned.");
    } catch (err: any) {
      setError(err.message || "Unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setSelectedNeuroTypes([]);
    setStudyText("");
    setAdaptedText(null);
    setError(null);
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg min-h-[400px] flex flex-col justify-center">
      {isLoading ? (
        <div>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-center text-gray-700">One moment. We are adapting your content…</p>
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
      ) : adaptedText ? (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Your adapted text</h2>
          <div className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap text-gray-800">
            <ReactMarkdown>
              {adaptedText}
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
            <label className="font-semibold mb-2">
              Add your learning material
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight resize-y min-h-[150px]"
              value={studyText}
              onChange={(e) => setStudyText(e.target.value)}
              placeholder="Paste a paragraph you’re working with — like a passage from a paper."
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
