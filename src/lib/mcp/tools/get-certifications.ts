import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_certifications",
  title: "Get Certifications",
  description: "Get Keshihan's professional certifications and credentials.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify([
          { name: "Salesforce Certified AI Associate", issuer: "Salesforce" },
          { name: "Salesforce Certified Platform Foundations", issuer: "Salesforce" },
          { name: "Cisco Certified Cybersecurity Essentials", issuer: "Cisco" },
          { name: "Certified Aspire Scholar 2023", issuer: "Aspire Institute" },
          { name: "Diploma in Digital Marketing", issuer: "Sri Lanka Institute of Marketing" },
          { name: "Google Analytics Certification", issuer: "Google" },
        ], null, 2),
      },
    ],
  }),
});
