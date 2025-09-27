import React, { use, useState } from 'react';
import Counter from '../Counter/Counter';
import Card from '../Card/Card';
import Status from '../Status/Status';

const IssueManagement = ({ fetchPromise }) => {

  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData)

  const handleStatusChange = (id) => {
    const updateData = data.map(issue => {
      if (issue.id === id && issue.status === "Open") {
        return { ...issue, status: "In-Progress" };
      }
      return issue;
    })
    setData(updateData)
  }

  return (
    <div>
      <Counter data={data}></Counter>

      <div className='w-11/12 mx-auto grid grid-cols-12 mt-10 gap-4'>
        <div className='col-span-12 md:col-span-9'>
          <h1 className='text-[24px] font-semibold mb-5'>Customer Tickets</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
              data.map((issue, ind) => {
                return (
                  <Card key={ind} issue={issue} handleStatusChange={handleStatusChange}></Card>
                )
              })
            }
          </div>
        </div>

        {/* Status */}
        <div className='col-span-12 md:col-span-3'>
          <Status></Status>
        </div>
      </div>
    </div >
  );
};

export default IssueManagement;