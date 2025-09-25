import React, { useState } from 'react';
import date from '../assets/Vector-1.png';
import green from '../assets/Ellipse-22.png';
import yellow from '../assets/Ellipse-23.png';
import { toast } from 'react-toastify';
const ContentData = ({ ticket, setProgress, progress, setAddTask }) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <div className=''>
            <div onClick={()=>{
                if(!isSelected){
                    setIsSelected(true);
                    setAddTask(prev => [...prev, ticket]);
                    setProgress(progress + 1);
                    toast.success('Ticket added to Task Status');
                }
               
            }} className='h-full rounded-[4px] shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] p-4 bg-[#fff]'>
                <div className=''>
                    <div className='flex justify-between'>
                        <h3 className='font-medium text-[18px] text-[#001931] truncate'>{ticket.title}.</h3>
                        <div className={`flex gap-2 items-center px-3 py-1 rounded-[400px] ${ticket.status === 'Open' ? 'bg-[#b9f8cf]' :  'bg-[#f8f3b9]'}`}>
                            <img className='w-[16px] h-[16px]' src={ticket.status === 'Open' ? green : yellow} alt="" /><a className={`font-medium text-[16px] ${ticket.status === 'Open' ? 'text-[#0b5e06]' : 'text-[#9c7700]'}`} href="#">{ticket.status}</a></div>
                    </div>
                    <p className='font-normal text-[16px] text-[#627382] mt-2 mb-4 truncate'>{ticket.description}</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <p className='font-medium text-[14px] text-[#627382]'>#{ticket.id}</p>
                            <p className={`font-medium text-[14px] ${ticket.priority === 'High' ? 'text-[#f83044]' :  ticket.priority === 'Medium' ? 'text-[#febb0c]' : ticket.priority === 'Low' ? 'text-[#02a53b]' : ''}`}>{ticket.priority.toUpperCase()} PRIORITY</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <h3 className='font-normal text-[14px] text-[#627382]'>{ticket.customer.toUpperCase()}</h3>
                            <img className='w-[20px] h-[20px]' src={date} alt="" /><h3 className='font-normal text-[14px] text-[#627382]'>{new Date(ticket.createdAt).toLocaleDateString("en-GB")}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentData;