import React, { use } from 'react';

import ContentData from './ContentData';
import { toast } from 'react-toastify';
const Content = ({ tickets, setProgress, progress, addTask, setAddTask, resolvedTask, setResolvedTask, availableTickets, setAvailableTickets }) => {
    const ticketsData = use(tickets);
    console.log(ticketsData);
    return (
        <div className='max-w-[1300px] mx-auto'>
            <h3 className='font-semibold text-2xl text-[#34485a] mb-3 ms-5'>Customer Tickets</h3>
            <div className='flex flex-col md:flex-row gap-4 px-3 md:px-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 ms-0 md:ms-5'>{
                    availableTickets.map(ticket => <ContentData addTask={addTask} setAddTask={setAddTask} progress={progress} setProgress={setProgress} key={ticket.id} ticket={ticket}></ContentData>)
                }</div>
                <div>
                    <div>
                        <h3 className='font-semibold text-2xl text-[#34485a]'>Task Status</h3>
                        {addTask.length === 0 ? (
                            <p className='font-normal text-[16px] text-[#627382] my-3'>Select a ticket to add to Task Status</p>
                        ) : (
                            <div className='flex flex-col gap-2 my-3'>
                                {addTask.map(task => (
                                    <div key={task.id} className='w-full md:w-[315px] shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] p-4 rounded-md bg-[#fff]'>
                                        <p className='font-medium text-[18px] text-[#001931]'>{task.title}</p>
                                        <button className='w-full font-semibold text-[16px] text-[#fff] bg-[#02a53b] rounded-[4px] px-4 py-3 mt-4' onClick={
                                            () => {
                                                setAddTask(prev => prev.filter(t => t.id !== task.id));
                                                setProgress(progress - 1);
                                                setResolvedTask(prev => [...prev, task]);
                                                setAvailableTickets((prev) => prev.filter((t) => t.id !== task.id));
                                                toast.success('Ticket marked as Resolved');
                                            
                                        }}>Complete</button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <h3 className='font-semibold text-2xl text-[#34485a]'>Resolved Task</h3>
                        {resolvedTask.length === 0 ? (
                            <p className='font-normal text-[16px] text-[#627382] my-3'>No resolved tasks yet.</p>
                        ) : (
                            <div className='flex flex-col gap-2 my-3'>
                                {resolvedTask.map(task => (
                                    <div key={task.id} className='w-full md:w-[315px] shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] p-4 rounded-md bg-[#e0e7ff]'>
                                        <p className='font-medium text-[18px] text-[#001931]'>{task.title}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;