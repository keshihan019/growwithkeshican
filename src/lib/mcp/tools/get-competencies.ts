import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_competencies",
  title: "Get Skills & Competencies",
  description: "Get Keshihan's technical skills and competencies grouped by category.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          programming: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],
          frameworksAndTools: ["React Native", "Flutter", "Bootstrap", "WordPress", "GitHub Pages"],
          designAndMedia: ["Figma", "Canva", "Adobe Photoshop", "Adobe Lightroom", "Filmora WS"],
          dataAndAnalytics: ["Google Analytics", "MySQL", "Business Analysis", "Data Visualization", "Jira"],
          marketingAndContent: ["Social Media Marketing", "SEO", "Content Writing", "Digital Advertising", "Blogging"],
          projectManagement: ["Trello", "Jira", "Slack", "Microsoft Teams", "Microsoft Packages"],
          platforms: ["Salesforce", "Hosting", "WordPress", "Zoom", "Translation"],
          interests: ["Photography", "Volunteering", "Blogging", "Mentoring"],
        }, null, 2),
      },
    ],
  }),
});
