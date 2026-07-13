import React from 'react';
import Card from './Card';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCalendar } from "react-icons/ai";
import Tag from './Tag';

export const TaskCard = ({ task, description, status, dueDate, onEdit, onDelete }) => {
    const variant = status === 'completed' ? 'success' : status === 'in-progress' ? 'primary' : 'danger';
    
    return (
        <Card>
            <div className='flex items-center justify-between mb-4'>
                <div className={`text-lg font-semibold ${status === 'completed' ? 'line-through' : ''}`}>{task}</div>
                {status !== 'completed' && (
                    <div className='flex items-center justify-between gap-4'>
                        <AiOutlineEdit className='text-blue-500 hover:text-blue-700 cursor-pointer' onClick={onEdit} />
                        <AiOutlineDelete className='text-red-500 hover:text-red-700 cursor-pointer' onClick={onDelete} />
                    </div>
                )}
            </div>
            <div className={`text-gray-700 mb-2`}>{description}</div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 text-sm text-gray-500'>
                    <AiOutlineCalendar />
                    <div>{dueDate}</div>
                </div>
                <Tag label={status} variant={variant} className="mt-2" />
            </div>
        </Card>
    );
};