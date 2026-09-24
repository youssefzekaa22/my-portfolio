/**
 * Set `repo`, `docs` and `demo` to real URLs when you have them.
 *  - `repo` / `docs` placeholders show with a dashed outline until replaced.
 *  - `demo: null` hides the "Live demo" button entirely (only shown when a URL is set).
 */
export const featuredProject = {
  id: 'job-application-tracker',
  name: 'Job Application Tracker',
  summary:
    'A Flask web app and a PostgreSQL database, containerized as separate services and orchestrated with Docker Compose.',
  stack: ['Flask', 'PostgreSQL', 'Docker', 'Docker Compose'],
  repo: 'https://github.com/YOUR-USERNAME/job-application-tracker',
  docs: 'https://github.com/YOUR-USERNAME/job-application-tracker#readme',
  demo: null,
  // Each concept maps directly to a line in the CV.
  concepts: [
    { name: 'Docker Compose', detail: 'App and database run as separate, orchestrated services.' },
    { name: 'Custom networks', detail: 'A dedicated Docker network carries service-to-service traffic.' },
    { name: 'Persistent volumes', detail: 'A named volume keeps PostgreSQL data across container restarts.' },
    { name: 'Multi-stage builds', detail: 'Smaller final image by leaving build tooling behind.' },
    { name: 'Non-root container', detail: 'The app process runs as an unprivileged user.' },
    { name: 'Least privilege', detail: 'File ownership is limited to what the app needs.' },
    { name: 'Health checks', detail: 'The web service waits for PostgreSQL to report healthy before it starts.' },
    { name: 'PostgreSQL', detail: 'Relational storage in its own container.' },
  ],
};

export const automationProjects = [
  {
    id: 'backup-script',
    name: 'Automated Daily System Backup Script',
    kind: 'Linux / Automation',
    summary:
      'A Bash script that automates daily system backups, keeps the backup files organized, and manages its own logs.',
    stack: ['Linux', 'Bash'],
    points: [
      'Automates the daily system backup.',
      'Organizes backup files automatically.',
      'Manages backup logs.',
      'Makes a recurring task more efficient and more reliable.',
    ],
    repo: 'https://github.com/YOUR-USERNAME/daily-backup-script',
  },
  {
    id: 'data-toolkit',
    name: 'Bash Data Processing Toolkit',
    kind: 'Automation / CLI tooling',
    summary:
      'A modular, menu-driven Bash toolkit for processing text and CSV data, built to fail loudly and log clearly.',
    stack: ['Bash', 'awk', 'sed', 'grep'],
    points: [
      'Line counting and CSV column extraction with awk.',
      'Pattern filtering, file merging, and duplicate removal.',
      'Statistics: count, minimum, maximum, and average.',
      'Dependency checks and input validation before anything runs.',
      'Color-coded logging for INFO, SUCCESS, WARNING, and ERROR.',
    ],
    repo: 'https://github.com/YOUR-USERNAME/bash-data-toolkit',
  },
];
