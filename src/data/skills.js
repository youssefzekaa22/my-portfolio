// `icon` keys map to src/data/brandIcons.js. Skills without an icon render as text chips.
// `inProject: true` marks a skill that is actually used in one of the projects on this page.
export const skillGroups = [
  {
    id: 'os',
    title: 'Operating systems',
    blurb: 'Where everything else runs.',
    items: [
      { name: 'Linux', icon: 'linux', inProject: true },
      { name: 'Ubuntu', icon: 'ubuntu' },
      { name: 'RHEL', icon: 'rhel' },
      { name: 'System administration' },
      { name: 'Permissions' },
      { name: 'systemd' },
      { name: 'cron' },
      { name: 'Networking' },
    ],
  },
  {
    id: 'containers',
    title: 'Containers & orchestration',
    blurb: 'Packaging and running services.',
    items: [
      { name: 'Docker', icon: 'docker', inProject: true },
      { name: 'Docker Compose', icon: 'docker', inProject: true },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Multi-stage builds', inProject: true },
      { name: 'Container hardening', inProject: true },
      { name: 'Network isolation', inProject: true },
    ],
  },
  {
    id: 'cicd',
    title: 'CI/CD & automation',
    blurb: 'Getting changes from commit to running.',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'GitLab CI', icon: 'gitlab' },
      { name: 'GitOps' },
      { name: 'CI/CD pipelines' },
      { name: 'Workflow automation' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & infrastructure',
    blurb: 'Infrastructure defined as code.',
    items: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Ansible', icon: 'ansible' },
      { name: 'Infrastructure as Code' },
      { name: 'DevSecOps' },
      { name: 'Monitoring' },
    ],
  },
  {
    id: 'scripting',
    title: 'Scripting & programming',
    blurb: 'Automating the repetitive parts.',
    items: [
      { name: 'Bash', icon: 'bash', inProject: true },
      { name: 'awk', inProject: true },
      { name: 'sed', inProject: true },
      { name: 'grep', inProject: true },
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    id: 'web',
    title: 'Databases & web',
    blurb: 'The application side of the stack.',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql', inProject: true },
      { name: 'Flask', icon: 'flask', inProject: true },
    ],
  },
];
