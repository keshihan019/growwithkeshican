import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact",
  title: "Get Contact & Social Info",
  description: "Get Keshihan's contact information, email, phone, and social media handles.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          email: "keshihan0000@gmail.com",
          phone: "+94 77 918 5685",
          location: "Trincomalee, Sri Lanka",
          social: {
            linkedin: "https://www.linkedin.com/in/keshihan/",
            github: "https://github.com/keshihan019",
            facebook: "https://www.facebook.com/growithkeshican",
            instagram: "https://www.instagram.com/keshihan_19",
            twitter: "https://x.com/keshihan019",
            youtube: "https://www.youtube.com/channel/UCewC3HIV1PW4iQFncs8Nqxw",
            tiktok: "https://www.tiktok.com/@keshihan_19",
            medium: "https://medium.com/@keshihan",
            behance: "https://behance.net/keshihan",
            hackerrank: "https://www.hackerrank.com/keshihan0000",
            stackoverflow: "https://stackoverflow.com/users/20063836/keshihan-ilamuruganathan",
          },
          freelance: {
            fiverr: "https://www.fiverr.com/keshihan",
            upwork: "https://www.upwork.com/freelancers/~015084858ff12e8415",
            freelancer: "https://www.freelancer.com/u/keshihan19",
          },
        }, null, 2),
      },
    ],
  }),
});
