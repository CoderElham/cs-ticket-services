import React from 'react';
import { FaCircle, FaCalendarAlt } from "react-icons/fa";

const Card = ({ issue, handleStatusChange }) => {

  return (
    <div>
      <div className='bg-white p-4 rounded-md shadow-md cursor-pointer h-[180px]' onClick={() => handleStatusChange(issue.id)}>
        <div className='flex justify-between items-center'>
          <h3 className='text-[12px] md:text-[18px] font-medium line-clamp-1 '>{issue.title}</h3>
          <p className={`text-[10px] py-2 px-3 md:text-[14px] bg-green-300 text-green-700 font-semibold rounded-full flex items-center gap-1 ${issue.status === "Open" ? "bg-green-200 text-green-600"
            : issue.status === "In-Progress" ? "bg-yellow-200 text-yellow-600"
              : "bg-gray-200 text-gray-600"}`}>
            <FaCircle /> {issue.status}
          </p>
        </div>
        <div className='my-4 line-clamp-2 text-[12px] md:text-[16px]'>
          <p>{issue.description}</p>
        </div>
        <div className='flex items-center justify-between text-[10px] md:text-[14px]'>
          <div className='flex items-center gap-2'>
            <span># {issue.id}</span>
            <p className={`${issue.priority == "HIGH PRIORITY" ? "text-red-500" : issue.priority == "MEDIUM PRIORITY" ? "text-green-500" : "text-yellow-500"}`}>{issue.priority}</p>
          </div>
          <div className='flex items-center gap-2'>
            <span>{issue.customer}</span>
            <span className='flex items-center gap-1'><FaCalendarAlt /> {issue.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;