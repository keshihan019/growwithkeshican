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
          { title: "Digital Marketing", description: "Data-driven social media strategy, SEO, and paid campaigns that grow reach and conversions." },
          { title: "Content Creation", description: "Engaging written, visual, and video content crafted to elevate your brand story." },
          { title: "Business Coaching", description: "Practical guidance for founders and teams to sharpen strategy, execution, and growth." },
          { title: "Voice-Over Services", description: "Clear, professional voice-overs for ads, explainers, and e-learning in multiple languages." },
          { title: "Career Coaching", description: "Personalised mentoring on CVs, interviews, and career direction for students and professionals." },
          { title: "Full-Stack Development", description: "End-to-end web and mobile applications built with modern, scalable technologies." },
        ], null, 2),
      },
    ],
  }),
});
