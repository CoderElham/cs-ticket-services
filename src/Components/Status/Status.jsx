import React from 'react';

const Status = ({ data, handleComplete }) => {
  const inProgressTasks = data.filter(issue => issue.status === "In-Progress");
  const resolvedTasks = data.filter(issue => issue.status === "Resolved");

  return (
    <div>
      <h1 className='text-[24px] font-semibold my-5'>Task Status</h1>

      {/* In-Progress Tasks */}
      <div className='flex flex-col gap-4'>
        {inProgressTasks.length === 0 ? (
          <p className="text-gray-500">No tasks in progress.</p>
        ) : (
          inProgressTasks.map(task => (
            <div key={task.id} className='p-4 bg-white shadow-lg rounded-lg'>
              <h2 className='text-[16px] font-semibold'>{task.title}</h2>
              <button
                onClick={() => handleComplete(task.id)}
                className='mt-2 w-full p-2 bg-green-700 text-white rounded cursor-pointer'
              >
                Complete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Resolved Tasks */}
      <h1 className='text-[24px] font-semibold my-5'>Resolved Task</h1>
      <div className='flex flex-col gap-4'>
        {resolvedTasks.length === 0 ? (
          <p className='text-gray-500'>No resolved tasks yet.</p>
        ) : (
          resolvedTasks.map(task => (
            <div key={task.id} className='p-4 bg-white shadow-lg rounded-lg'>
              <h2 className='text-[16px] font-semibold'>{task.title}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Status;
