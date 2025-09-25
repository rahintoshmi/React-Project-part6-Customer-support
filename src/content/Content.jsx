import React, { use } from 'react';

import ContentData from './ContentData';
const Content = ({ tickets }) => {
    const ticketsData = use(tickets);
    console.log(ticketsData);
    return (
        <div className='max-w-[1300px] mx-auto'>
            <h3 className='font-semibold text-2xl text-[#34485a] mb-3 ms-5'>Customer Tickets</h3>
        <div className='flex gap-4'>
            <div className='grid grid-cols-2 gap-4 ms-5'>{
                ticketsData.map(ticket => <ContentData key={ticket.id} ticket={ticket}></ContentData>)
            }</div>
            <div>
                <div>
                        <h3 className='font-semibold text-2xl text-[#34485a]'>Task Status</h3>
                        <p className='font-normal text-[16px] text-[#627382] my-3'>Select a ticket to add to Task Status</p>
                    </div>
                <div>
                        <h3 className='font-semibold text-2xl text-[#34485a]'>Resolved Task</h3>
                        <p className='font-normal text-[16px] text-[#627382] mt-3'>No resolved tasks yet.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Content;