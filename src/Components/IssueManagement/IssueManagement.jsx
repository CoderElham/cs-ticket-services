import React, { use, useState } from 'react';
import Counter from '../Counter/Counter';
import Card from '../Card/Card';
import Status from '../Status/Status';
import { toast, Bounce } from 'react-toastify';

const IssueManagement = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);

  // Open → In-Progress
  const handleStatusChange = (id) => {
    const updateData = data.map(issue => {
      if (issue.id === id && issue.status === "Open") {

        toast.success(`${issue.title} - In-Progress`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        return { ...issue, status: "In-Progress" };
      }
      return issue;
    });
    setData(updateData);
  };

  // In-Progress → Resolved
  const handleComplete = (id) => {
    const updateData = data.map(issue => {
      if (issue.id === id && issue.status === "In-Progress") {

        toast.success(`${issue.title} - Resolved`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        return { ...issue, status: "Resolved" };
      }
      return issue;
    });
    setData(updateData);
  };

  return (
    <div>
      <Counter data={data} />

      <div className='w-11/12 mx-auto grid grid-cols-12 mt-10 gap-4'>
        {/* Customer Tickets */}
        <div className='col-span-12 md:col-span-9'>
          <h1 className='text-[24px] font-semibold mb-5'>Customer Tickets</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {data
              .filter(issue => issue.status !== "Resolved")
              .map((issue, ind) => (
                <Card
                  key={ind}
                  issue={issue}
                  handleStatusChange={handleStatusChange}
                />
              ))}
          </div>
        </div>

        {/* Task Status & Resolved */}
        <div className='col-span-12 md:col-span-3'>
          <Status data={data} handleComplete={handleComplete} />
        </div>
      </div>
    </div>
  );
};

export default IssueManagement;
