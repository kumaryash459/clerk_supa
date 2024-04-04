// import { Button } from "@/components/ui/button";


// export default function Home() {
//   return (
//     <>
//     <div className="bg-gray-200 px-4 py-4 justify-center ">
//       clerk_supa
      
//     </div>
//     <div className="flex justify-end -my-[3rem] gap-2">

//       <Button>sign-up</Button>
//       <Button>Login</Button>
//     </div>
//     </>
//   );
// }


import { auth, currentUser } from "@clerk/nextjs";
import React from "react";

export default async function Dashboard() {
  const { userId } = auth();
  // console.log(userId);
  const user = await currentUser()
  if(!userId || !user){
    return <div>You are not Logged in</div>
  }

  console.log(user);
  
  return (
    <div className='mt-10 text-start max-w-xl mx-auto bg-neutral-200 p-5 rounded'>
      <h1 className='text-4xl font-bold'>Welcome</h1>
      <ul className='list-none mt-10'>
        <li className='mb-2'>
          <span className='font-semibold'>First Name:</span> {user.firstName}
        </li>
        <li className='mb-2'>
          <span className='font-semibold'>Last Name:</span> {user.lastName}
        </li>
        <li className='mb-2'>
          <span className='font-semibold'>Email:</span>{' '}
          {user.emailAddresses[0].emailAddress}
        </li>
        <li className="mb-2">
          {/* {user.imageUrl} */}
        </li>
      </ul>
    </div>

  );
}
