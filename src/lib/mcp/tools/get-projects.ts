import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_projects",
  title: "Get Featured Projects",
  description: "Get Keshihan's featured work and projects with links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify([
          {
            title: "Community Empowerment Platform",
            tags: ["Social Impact", "Web Dev"],
            description: "A digital platform connecting communities in Trincomalee with resources, mentorship, and opportunities.",
            link: "https://whatsapp.com/channel/0029Va9qDis9MF90vwaoYv3J",
          },
          {
            title: "Community Hub Trinco Mirror",
            tags: ["Community", "Web Dev"],
            description: "A community-driven news and information hub serving the Trincomalee district.",
            link: "https://trincomirror.com/",
          },
          {
            title: "Digital Marketing Campaigns",
            tags: ["Marketing", "Analytics"],
            description: "End-to-end social media campaigns with data-driven insights and measurable ROI for multiple brands.",
            link: "https://qubitz.solutions/",
          },
        ], null, 2),
      },
    ],
  }),
});
