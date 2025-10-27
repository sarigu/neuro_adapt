const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const studyStrategyMap = {
  ADHD: `
  Break content into short, digestible paragraphs (2–3 sentences each). 
  - Bold the first letter of every sentence. Do NOT bold other letters in the sentence. 
  - Highlight key words and phrases in bold.
  - Use bullet points and numbered lists where appropriate.
  - Include clear headings to structure the content.
  - Example:
  Original: "Neanderthals lived in Europe. They were strong."
  Correct Adaptation:
  "**N**eanderthals lived in Europe. **T**hey were strong."
  Incorrect Adaptation:
  "**N**eanderthals lived in Europe. **T**hey were **s**trong."  // Do not bold internal letters
  `,

  Autism: `
  Present information in a clear, literal, and structured way. 
  - Avoid metaphors, idioms, or abstract language.
  - Use headings, subheadings, bullet points, and numbered lists.
  - Maintain consistent formatting and predictable patterns.
  - Example:
  Original: "Neanderthals adapted cleverly."
  Adapted:
  "## Neanderthal Adaptations
  - Neanderthals adapted to cold climates.
  - They used tools for hunting and gathering."
`,

  Dyslexia: `
  Use short sentences and simple, familiar vocabulary. 
  - Break content into bullet points and small sections.
  - Avoid long paragraphs, complex formatting, or dense text.
  - Use high-contrast fonts and spacing to improve readability.
  - Example:
  Original: "Neanderthals lived across Europe and western Asia for many thousands of years."
  Adapted:
  "- Neanderthals lived in Europe.
  - They also lived in western Asia.
  - Their timeframe: 400,000 to 40,000 years ago."
`,

  Dyspraxia: `
  Provide step-by-step instructions in a logical sequence.
  - Use clear headings, numbered lists, and bullet points.
  - Avoid cluttered layouts and overlapping visuals.
  - Example:
  Original: "Hunting required preparation and cooperation."
  Adapted:
  "## Hunting Steps
  1. Identify prey location.
  2. Prepare tools.
  3. Hunt with group cooperation."
`,

  Dyscalculia: `
  Minimize heavy use of numbers or calculations in text.
  - Explain concepts in plain language.
  - Use real-world examples or visual comparisons.
  - Highlight important numbers or patterns with bold if needed.
  - Break numeric content into simple, manageable steps.
  - Example:
  Original: "Neanderthals existed from 400,000 to 40,000 years ago."
  Adapted:
  "- Neanderthals existed for hundreds of thousands of years.
  - They lived in Europe and western Asia during this time."
  `,
};


router.post("/", async (req, res) => {
  const { selectedNeuroTypes, learningMaterial } = req.body;

  if (!selectedNeuroTypes || !learningMaterial) {
    return res.status(400).json({ error: "Please provide both neurotypes and learning material." });
  }

  // Build study strategies prompt
  const studyStrategies = selectedNeuroTypes
  .map((neuroType) => `${studyStrategyMap[neuroType] || "No specific strategy found."}`)
  .join("\n");

  const prompt = `
    The student has the following neurodiverse traits: ${selectedNeuroTypes.join(", ")}.

    Apply the following study strategies to help the student learn more effectively:
    ${studyStrategies}

    Adapt the following text using these strategies. 
    - Follow the formatting guidance in each strategy.
    - Use Markdown for all headings, bullet points, bold text, and numbered lists.
    - Make the adaptation exactly follow the examples provided for each neurodiverse type.

    ---
    The text: ${learningMaterial}
    ---

    Return only the adapted text in Markdown.
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", 
      messages: [
        { role: "system", content: "You are an educational assistant helping neurodiverse students learn better." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });

    const adaptedLearningMaterial = completion.choices[0].message.content;

    console.log(adaptedLearningMaterial);

    res.status(200).json({ adaptedLearningMaterial });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong with content adaptation." });
  }
});

module.exports = router;
