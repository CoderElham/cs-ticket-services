import React from 'react';

const Counter = ({ data }) => {

  const inProgressData = data.filter(element => element.status == "In-Progress")
  const resolvedData = data.filter(element => element.status === "Resolved");
  console.log(inProgressData);

  return (
    <div className='w-11/12 mx-auto mt-20 flex flex-col md:flex-row gap-5'>

      <div className='w-full relative'>
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex justify-between items-center rounded-2xl'>
          <div><img src="/public/vector1.png" alt="" /></div>
          <div><img src="/public/vector1.png" alt="" className='scale-x-[-1]' /></div>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
          <p className='text-[20px]'>In Progress</p>
          <span className='text-[40px] font-semibold'>{inProgressData.length}</span>
        </div>
      </div>

      <div className='w-full relative'>
        <div className='bg-gradient-to-r from-[#54CF68] to-[#00827A] flex items-center justify-between rounded-2xl'>
          <div><img src="/public/vector1.png" alt="" /></div>
          <div><img src="/public/vector1.png" alt="" className='scale-x-[-1]' /></div>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
          <p className='text-[20px]'>Resolved</p>
          <span className='text-[40px] font-semibold'>{resolvedData.length}</span>
        </div>
      </div>

    </div>
  );
};

export default Counter;