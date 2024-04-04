import { UserButton, UserProfile, auth } from '@clerk/nextjs';
import Link from 'next/link';
// import { useContext } from 'react';
export default async function Header() {
  const { userId } = auth();

  return (
    <div className='bg-gray-600 text-neutral-100 py-5'>
      <div className='container mx-auto flex items-center justify-between py-'>
        <li className='flex justify-center gap-3 mx-4'>

        <Link href='/'>Home</Link>
        {/* <Link href='/about'>About</Link> */}
        </li>
        
        <div>
          {userId ? (
            <div className='flex gap-4 items-end'>
              <li className='flex items-center  '>

              <Link href='/dashboard'>Dashboard</Link>
              </li>
              <UserButton afterSignOutUrl='/' />
              {/* <UserProfile/> */}
            </div>
          ) : (
            <div className='flex gap-4 items-end'>
              <li className='flex items-center gap-3 mx-10'>

              <Link href='/sign-up'>Sign up</Link>
              <Link href='/sign-in'>Sign In</Link>
              </li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}