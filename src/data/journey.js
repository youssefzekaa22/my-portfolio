// status: 'passed' | 'running' | 'next'  (styled like CI pipeline stages)
export const journey = [
  {
    id: 'degree',
    status: 'passed',
    when: '2025',
    title: "Bachelor's in Computer Science",
    text: 'Graduated from Future Academy Higher Institute of Technology. Graduation project: an AI-powered job-matching system.',
  },
  {
    id: 'internship',
    status: 'running',
    when: 'Jul 2026 – now',
    title: 'DevOps Intern at Route',
    text: 'Hybrid, Cairo. Hands-on training in Linux administration and Bash scripting, plus practical labs in containerization, infrastructure automation, and cloud.',
  },
  {
    id: 'toolchain',
    status: 'running',
    when: '2026',
    title: 'Learning the DevOps toolchain',
    text: 'Working through the tools day to day in labs and real-world scenarios.',
    tools: ['Linux', 'Bash', 'Git', 'Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Terraform', 'Ansible'],
  },
  {
    id: 'next',
    status: 'next',
    when: 'Goal',
    title: 'Junior DevOps / Cloud Engineer',
    text: 'The role I am working toward: applying these skills on real systems, with a team.',
  },
];
