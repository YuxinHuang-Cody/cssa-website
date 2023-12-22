'use client'
import { useTalimContext } from '@/context/TalimContext';
import Link from 'next/link';
import { useRouter,usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const {handleSidebarClose} = useTalimContext()
    const router = useRouter();
  const pathname = usePathname()
  const isActive = pathname === href;
  const handleClick = () => {
    router.push(href); // Navigate to the specified href
    handleSidebarClose();    // Close the sidebar
  };

  return (
    <Link 
    onClick={handleClick} 
    href={href}
    className={isActive ? 'active' : ''}
    >
      {children}
    </Link>
  );
};

export default NavLink;
