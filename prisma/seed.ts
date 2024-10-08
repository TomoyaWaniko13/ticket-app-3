import { Priority, PrismaClient, Status } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tickets = [
    {
      title: 'Bug fix: Login screen',
      description: 'Need to fix the issue where users are unable to log in.',
      status: Status.OPEN,
      priority: Priority.HIGH,
    },
    {
      title: 'New feature: Dashboard',
      description: 'Add a new graph to the user dashboard.',
      status: Status.STARTED,
      priority: Priority.MEDIUM,
    },
    {
      title: 'Performance improvement',
      description: 'Reduce application load time.',
      status: Status.OPEN,
      priority: Priority.LOW,
    },
    {
      title: 'Security update',
      description: 'Apply the latest security patches to fix vulnerabilities.',
      status: Status.OPEN,
      priority: Priority.HIGH,
    },
    {
      title: 'UI/UX enhancement',
      description: 'Update the user interface to improve usability.',
      status: Status.STARTED,
      priority: Priority.MEDIUM,
    },
    {
      title: 'Database optimization',
      description: 'Improve query performance to reduce response time.',
      status: Status.OPEN,
      priority: Priority.HIGH,
    },
    {
      title: 'New feature: User profiles',
      description: 'Add functionality for users to customize their profiles.',
      status: Status.OPEN,
      priority: Priority.LOW,
    },
    {
      title: 'Mobile responsiveness',
      description: 'Make the application mobile-friendly.',
      status: Status.STARTED,
      priority: Priority.HIGH,
    },
    {
      title: 'Documentation update',
      description: 'Update user manual and developer documentation.',
      status: Status.OPEN,
      priority: Priority.LOW,
    },
    {
      title: 'Bug fix: Search functionality',
      description: 'Fix the issue with inaccurate search results.',
      status: Status.CLOSED,
      priority: Priority.MEDIUM,
    },
    {
      title: 'API version upgrade',
      description: 'Upgrade API to a new version to support new features.',
      status: Status.STARTED,
      priority: Priority.MEDIUM,
    },
    {
      title: 'Test automation',
      description: 'Implement automation for unit tests and E2E tests.',
      status: Status.OPEN,
      priority: Priority.HIGH,
    },
    {
      title: 'Accessibility improvements',
      description: 'Enhance application accessibility for users with disabilities.',
      status: Status.OPEN,
      priority: Priority.HIGH,
    },
    {
      title: 'Data migration',
      description: 'Migrate data from old database structure to new schema.',
      status: Status.STARTED,
      priority: Priority.HIGH,
    },
    {
      title: 'New feature: Dark mode',
      description: 'Implement a dark mode option for the user interface.',
      status: Status.OPEN,
      priority: Priority.MEDIUM,
    },
    {
      title: 'Performance monitoring',
      description: 'Set up tools and systems for monitoring application performance.',
      status: Status.STARTED,
      priority: Priority.MEDIUM,
    },
    {
      title: 'Code refactoring',
      description: 'Refactor legacy code to improve maintainability.',
      status: Status.OPEN,
      priority: Priority.LOW,
    },
    {
      title: 'Third-party integration',
      description: 'Integrate a new payment gateway into the system.',
      status: Status.STARTED,
      priority: Priority.HIGH,
    },
    {
      title: 'Bug fix: Notification system',
      description: 'Address issues with delayed or missing notifications.',
      status: Status.CLOSED,
      priority: Priority.HIGH,
    },
    {
      title: 'User feedback implementation',
      description: 'Implement changes based on recent user feedback and surveys.',
      status: Status.OPEN,
      priority: Priority.MEDIUM,
    },
  ];

  for (const ticket of tickets) {
    await prisma.ticket.create({
      data: ticket,
    });
  }

  console.log('Seeding completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
