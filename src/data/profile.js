/**
 * All personal content lives in src/data/*.js — edit here, not in components.
 *
 * Anything containing "YOUR-" or "your.email" is a PLACEHOLDER. It is drawn with a
 * dashed outline in the UI until you replace it, so you can spot what is left.
 */
export const profile = {
  name: 'Youssef Zakaria Fahmy',
  shortName: 'Youssef Zakaria',
  role: 'DevOps Engineer',
  tagline:
    'Building reliable infrastructure, automation, containers, and cloud-based workflows.',
  status: 'DevOps Intern at Route, Cairo',
  location: 'Cairo, Egypt',
  phone: '01061396717',
  phoneHref: 'tel:+201061396717',

  // ── REPLACE THESE ───────────────────────────────────────────────
  email: 'your.email@example.com',
  github: 'https://github.com/YOUR-USERNAME',
  linkedin: 'https://www.linkedin.com/in/YOUR-LINKEDIN-ID',
  // Put a photo in /public (e.g. public/profile.jpg) and set this to './profile.jpg'.
  // While it is null, a monogram is shown instead.
  profileImage: null,
  profileImageAlt: 'Portrait of Youssef Zakaria Fahmy',
};

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate (Future Academy Higher Institute of Technology, 2025) who has moved into DevOps. My graduation project was an AI-powered system that matches job seekers with relevant openings. Since then my focus has shifted to how software gets packaged, automated, and run.",
    "Right now I'm doing a DevOps diploma and internship at Route in Cairo, working through Linux administration, Bash, Git, Docker, Jenkins, Kubernetes, Ansible, Terraform and AWS with hands-on labs and realistic scenarios. It's training, not production experience, and I'd rather say that plainly than dress it up.",
    "What I've built so far is small but real: a containerized Flask and PostgreSQL app, a backup script, and a CLI toolkit for CSV data. I like workflows that are repeatable and reliable, and I learn fastest by building. I'm looking for a junior DevOps or cloud role where I can keep doing that on real systems.",
  ],
  strengths: [
    'Turns technical problems into organized, working projects.',
    'Builds practical solutions, from containerized apps to Bash automation tools.',
    'Collaborates and communicates clearly.',
    'Focuses on reliable, repeatable workflows.',
    'Learns quickly by applying new concepts in hands-on labs.',
  ],
};

export const education = {
  degree: "Bachelor's Degree in Computer Science",
  school: 'Future Academy Higher Institute of Technology',
  year: '2025',
  project: {
    title: 'Smart System Aided for Job Seekers and HR',
    description:
      'An AI-powered system that matches job seekers with relevant opportunities using machine learning.',
  },
};
