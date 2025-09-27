import React from 'react';

const Status = () => {
  return (
    <div>
      <h1 className='text-[24px] font-semibold my-5 space-y-2'>Task Status</h1>
      <div className='p-4 bg-white flex flex-col gap-4 font-semibold shadow-lg rounded-lg'>
        <h2 className='text-[18px]'>Title Here</h2>
        <button className='p-3 bg-green-700 text-white cursor-pointer'>Complete</button>
      </div>
      <h1 className='text-[24px] font-semibold my-5'>Task Status</h1>
      <div className='p-4 bg-white flex flex-col gap-4 font-semibold shadow-lg rounded-lg'>
        <p className='text-[16px]'>No resolved tasks yet.</p>
      </div>
    </div>
  );
};

export default Status;