import Link from 'next/link';
import { ModeToggle } from '@/components/ToggleMode';
import MainNavLinks from '@/components/MainNavLinks';

// 9. Project Structure
// 10. Style / Theme
// 12. Navigation Features

const MainNav = () => {
  return (
    <div className={'flex justify-between'}>
      <MainNavLinks />
      <div className={'flex items-center gap-2'}>
        <Link href={'/'}>Logout</Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default MainNav;
