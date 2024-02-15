import React from 'react';
import Image from 'next/image';
import Animation from '../ui/assests/login-animate.svg';

type Props = {}

const Page: React.FC<Props> = () => {
  return (
    <div>
      <div className='flex justify-space-evenly'>
      <div><form
          className="w-1/2 p-6 rounded shadow px-8 pt-6 pb-8 mb-4"
          // onSubmit={handleSubmit} 
        > 
        </form></div>
        <div>
          <Image src={Animation} alt="Login Animation" />
        </div>
      </div>
    </div>
  );
}

export default Page;