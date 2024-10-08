'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

// 12. Navigation Features

const MainNavLinks = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Tickets', href: '/tickets' },
    { label: 'Users', href: '/users' },
  ];

  const currentPath = usePathname();
  console.log(currentPath);

  return (
    <div className={'flex items-center gap-2'}>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={clsx('font-medium text-muted-foreground transition-colors hover:text-primary/80', {
            'cursor-default text-primary': currentPath === link.href,
          })}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default MainNavLinks;
