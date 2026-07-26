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
          { title: "NEOrganics Food Innovation Lab Business Pitch Competition — 1st Runner-Up", year: "Sep 2021", description: "Business Pitch Competition by Comdu.it & NEOrganics." },
          { title: "Leo Gold Star Award", year: "Jan 2021", description: "Issued by Leo District 306C1 for outstanding accomplishments during the Leoistic year 2020/21." },
        ], null, 2),
      },
    ],
  }),
});
