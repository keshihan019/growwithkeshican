import { defineMcp } from "@lovable.dev/mcp-js";
import getAbout from "./tools/get-about";
import getExperience from "./tools/get-experience";
import getEducation from "./tools/get-education";
import getCertifications from "./tools/get-certifications";
import getAchievements from "./tools/get-achievements";
import getCompetencies from "./tools/get-competencies";
import getServices from "./tools/get-services";
import getProjects from "./tools/get-projects";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "keshihan-portfolio-mcp",
  title: "Keshihan Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Provides read-only access to Keshihan Ilamuruganathan's public professional portfolio. Use these tools to answer questions about his background, experience, education, skills, certifications, achievements, services, projects, and contact information.",
  tools: [
    getAbout,
    getExperience,
    getEducation,
    getCertifications,
    getAchievements,
    getCompetencies,
    getServices,
    getProjects,
    getContact,
  ],
});
