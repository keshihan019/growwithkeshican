import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_about",
  title: "Get About Info",
  description: "Get Keshihan's personal bio, current role, education summary, certifications, and languages spoken.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          name: "Keshihan Ilamuruganathan",
          location: "Trincomalee, Sri Lanka",
          bio: "Keshihan is a dedicated and ambitious professional with a strong passion for Information Technology and Business Management. He is a passionate social impactpreneur from Trincomalee, Sri Lanka, dedicated to driving innovation at the intersection of technology, digital marketing & community empowerment.",
          currentRole: "Analyst (Business + Social Media)",
          education: "BSc. Information Systems",
          certifications: "2× Salesforce · Cisco Certified",
          languages: ["Tamil", "English", "Sinhala", "French"],
        }, null, 2),
      },
    ],
  }),
});
