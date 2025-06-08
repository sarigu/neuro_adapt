const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Map of learning strategies per type
const strategyMap = {
  ADHD: "Use short paragraphs, highlight key words, and bold the first letter of each sentence to maintain focus.",
  Autism: "Be clear, literal, and structured. Avoid metaphors and abstract language. Use headings and bullet points.",
  Dyslexia: "Use simple vocabulary, short sentences, and break the content into bullet points. Avoid complex formatting.",
  Dyscalculia: "Avoid number-dense paragraphs. Use plain explanations and include examples or comparisons.",
  Dyspraxia: "Keep instructions step-by-step and avoid cluttered formatting. Use a clean layout.",
};

router.post("/", async (req, res) => {
  const { selectedNeuroTypes, studyText } = req.body;

  //Define prompt
  const learningStrategies = selectedNeuroTypes
    .map((neuroType) => `- ${neuroType}: ${strategyMap[neuroType] || "No specific strategy found."}`)
    .join("\n");

  const prompt = `
    The student is:
    ${selectedNeuroTypes.join(", ")}.

    Here are the learning strategies that help the student to learn easier based on their neurotype:
    ${learningStrategies}

    Now, adapt the following content by applying these learning strategies to the content:
    ---
    ${studyText}
    ---
    Please return only the adapted text.
  `;

  //console.log("Prompt:\n", prompt);

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an educational assistant helping neurodiverse students learn better.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const adaptedText = completion.choices[0].message.content;
    res.status(200).json({ adaptedText });
  } catch (error) {
    //console.error("Error:", error.message);
    res.status(500).json({ error: "Something went wrong with content adaptation." });
  }
});

module.exports = router;
