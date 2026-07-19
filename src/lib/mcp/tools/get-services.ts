import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_services",
  title: "Get Services Offered",
  description: "Get the list of professional services Keshihan offers to clients.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify([
          { title: "Full-Stack Development", description: "End-to-end web applications using modern technologies and best practices." },
          { title: "Digital Marketing", description: "Data-driven social media strategies, SEO optimization, and content marketing." },
          { title: "Business Analysis", description: "Translating business needs into actionable insights and technical solutions." },
          { title: "UI/UX Design", description: "User-centered designs crafted in Figma and brought to life with clean code." },
          { title: "Salesforce Solutions", description: "CRM customization, automation, and administration as a certified professional." },
          { title: "Mobile Development", description: "Cross-platform apps using React Native and Flutter for iOS & Android." },
        ], null, 2),
      },
    ],
  }),
});
