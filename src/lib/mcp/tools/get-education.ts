import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_education",
  title: "Get Education",
  description: "Get Keshihan's academic qualifications and educational background.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify([
          { degree: "Bachelor of Laws (Hons)", institution: "Open University of Sri Lanka", period: "2024 – Present" },
          { degree: "Diploma in Digital Marketing", institution: "Sri Lanka Institute of Marketing", period: "2023 – 2024" },
          { degree: "Diploma in Political Studies", institution: "Centenary Political Academy", period: "2023 – 2024" },
          { degree: "BA in Sustainable Development", institution: "Xavier University, Odisha", period: "2022 – 2026" },
          { degree: "BSc. (Hons) in Information Systems", institution: "Sabaragamuwa University of Sri Lanka", period: "2021 – 2025" },
        ], null, 2),
      },
    ],
  }),
});
