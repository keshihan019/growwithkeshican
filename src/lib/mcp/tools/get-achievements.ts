import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_achievements",
  title: "Get Achievements",
  description: "Get Keshihan's achievements, awards, hackathon results, and recognitions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify([
          { title: "Lazarus 2.0 EIDOS Ideathon — Winners", year: "2023" },
          { title: "Yarl SF Ohana Hackforce — Finalist", year: "2023" },
          { title: "Idealize 3.0 — Finalist", year: "2022" },
          { title: "Aspire Scholar '23", description: "Selected for the Aspire Leaders Program." },
          { title: "Social Impactpreneur", description: "Driving community empowerment initiatives through technology in Sri Lanka." },
          { title: "5,600+ LinkedIn Followers", description: "Strong professional network sharing insights on tech, marketing, and career development." },
        ], null, 2),
      },
    ],
  }),
});
