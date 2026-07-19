import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_experience",
  title: "Get Work Experience",
  description: "Get Keshihan's professional work experience history in reverse chronological order.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify([
          {
            role: "Social Media Analyst",
            company: "Qubitz",
            period: "Feb 2025 – Present",
            description:
              "Analyze social media performance and generate data-driven insights to optimize engagement and campaign effectiveness. Manage brand presence by developing strategic content, tracking trends, and improving overall digital growth.",
          },
          {
            role: "Business Analyst Intern",
            company: "Dialog Axiata PLC",
            period: "Aug 2024 – Feb 2025",
            description:
              "Developed and maintained dynamic sales dashboards (weekly/monthly/quarterly) to track performance metrics. Analyzed sales trends, market insights, and partner performance to identify gaps and recommend improvements.",
          },
          {
            role: "Social Media Analyst",
            company: "Hashtag Generation",
            period: "Sep 2024 – Feb 2025",
            description:
              "Monitored platform-specific trends and audience behavior to optimize content strategy. Prepared performance reports and analyzed campaign results for data-driven decision-making.",
          },
          {
            role: "Development Intern",
            company: "International Youth Alliance for Peace (IYAP)",
            period: "Feb 2023 – Jul 2023",
            description:
              "Worked on graphic designing, social media management, strategy planning, blogging, article writing, and the blogger recruitment project.",
          },
          {
            role: "Digital Marketing Intern",
            company: "Commercial Technologies Plus",
            period: "Aug 2022 – Feb 2023",
            description:
              "Assisted in executing digital campaigns, optimizing content strategies, and contributing to brand visibility across multiple online platforms.",
          },
        ], null, 2),
      },
    ],
  }),
});
