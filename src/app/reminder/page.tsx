"use client"
import MenuBar from '@/components/UI/MenuBar';
import Image from 'next/image';
import React, { useState } from 'react';

const dummyTasks = [
    { id: 1, name: 'Task name is the task name', status: 'new', priority: 'high', date: 'Feb 25, 2025', completed: false },
    { id: 2, name: 'Task name is the task name', status: 'normal', priority: 'normal', date: 'Feb 25, 2025', completed: false },
    { id: 3, name: 'Task name is the task name', status: 'complete', priority: 'none', date: 'Feb 25, 2025', completed: true },
    { id: 4, name: 'Task name is the task name', status: 'default', priority: 'high', date: 'Feb 25, 2025', completed: false },
    { id: 5, name: 'Task name is the task name', status: 'complete', priority: 'none', date: 'Feb 25, 2025', completed: true },
    { id: 6, name: 'Task name is the task name', status: 'complete', priority: 'none', date: 'Feb 25, 2025', completed: true }
];

const Reminder = () => {
    const [tasks, setTasks] = useState(dummyTasks);
    const [showTaskform, setTaskForm] = useState<boolean>(false)

    const toggleComplete = (id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    return (
        <div className="p-2 md:p-8">
            <MenuBar />
            <div className=" rounded-xl  mt-8">
                <div className="flex justify-between items-center mb-4 bg-white p-4 rounded-md shadow-md">
                    <div>
                        <h2 className="text-xl font-semibold">Reminder</h2>
                        <p className="text-sm text-gray-500">Manage all the task reminder</p>
                    </div>
                    <button onClick={() => setTaskForm(true)} className="bg-[#2E8BC9] hover:opacity-90 text-white px-4 py-2 rounded-md cursor-pointer">
                        + Add Task
                    </button>
                </div>
                <div className="mt-6 bg-white flex gap-4 justify-between overflow-x-auto items-start shadow-md rounded-md">
                    <div className='w-full rounded-l-lg relative min-w-[600px] md:w-full p-2'>
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className="flex flex-wrap md:flex-nowrap items-center justify-between border-b border-[#e9e9e9] rounded-md p-3 py-4"
                            >
                                <div className="flex items-center gap-6 flex-1 min-w-0">
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleComplete(task.id)}
                                        className="min-w-6 min-h-6 appearance-none border-none outline-none rounded-sm shadow-md checked:bg-[#2E8BC9] checked:ring-[#2E8BC9] transition-all checkmarkInput"
                                    />
                                    <span
                                        className={`text-base truncate ${task.completed ? 'line-through text-gray-400' : 'text-black'}`}
                                    >
                                        {task.name}
                                    </span>
                                    {task.status === 'new' && (
                                        <span className="bg-blue-100 text-[#2E8BC9] px-2 py-0.5 text-xs rounded-full whitespace-nowrap">
                                            New
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-2 flex-1 justify-center -ml-12">
                                    {task.status === 'complete' ? (
                                        <div className="text-green-600 text-sm bg-green-100 px-2 py-0.5 rounded-full flex items-center justify-center gap-1">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.6668 8.00065C14.6668 4.31875 11.682 1.33398 8.00016 1.33398C4.31826 1.33398 1.3335 4.31875 1.3335 8.00065C1.3335 11.6825 4.31826 14.6673 8.00016 14.6673C11.682 14.6673 14.6668 11.6825 14.6668 8.00065Z" stroke="#237B10" strokeWidth="1.5"/>
                                                <path d="M5.3335 8.33333L7.00016 10L10.6668 6" stroke="#237B10" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Complete
                                        </div>
                                    ) : task.priority === 'high' ? (
                                        <span className="text-red-600 text-sm bg-red-100 px-2 py-0.5 rounded-full">
                                            ↑ High
                                        </span>
                                    ) : task.priority === 'normal' ? (
                                        <span className="text-blue-600 text-sm bg-blue-100 px-2 py-0.5 rounded-full">
                                            Normal
                                        </span>
                                    ) : null}
                                </div>
                                <div className="flex items-center gap-6 flex-1 justify-end min-w-0 -ml-12">
                                    <div className="flex items-center w-[7rem] ">
                                        {[1, 2, 3].map((_, i) => (
                                            <img
                                                key={i}
                                                src={`https://i.pravatar.cc/150?img=${i + 1}`}
                                                alt="Avatar"
                                                className="min-w-9 min-h-9 rounded-full -ml-2 border-2 border-white"
                                            />
                                        ))}
                                        <div className="bg-[#2E8BC9] min-w-9 min-h-9 text-white text-xs rounded-full border-2 -ml-2 border-white flex items-center justify-center">
                                            <span>+5</span>
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-500 -ml-2">{task.date}</span>
                                    <div className='flex items-center justify-center gap-6'>
                                        <Image
                                        src="/Frame 2147226750.svg"
                                        alt="update"
                                        width="30"
                                        height="30"
                                        className="text-blue-500 hover:text-blue-700 cursor-pointer"
                                    />
                                    <Image
                                        src="/delete-02.svg"
                                        alt="delete"
                                        width="20"
                                        height="20"
                                        className="text-blue-500 hover:text-blue-700 cursor-pointer -ml-2"
                                    />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {
                        showTaskform ? <div className='p-3 md:w-[30%] w-full md:static absolute top-0 left-0 min-h-full bg-slate-100'>
                            <form method="post" className=' w-full'>
                                <div className='w-full'>
                                    <label htmlFor="title" className='text-[20px] font-[500]'>Title</label>
                                    <input type="text" name="title" id="title" className='border-none outline-none p-2 text-lg rounded-md shadow-md w-full bg-white focus-within:ring-2 focus-within:ring-[#2E8BC9] focus-within:outline-none' placeholder='Write...' />
                                </div>
                                <p className='text-[20px] font-[500] pt-8'>Priority</p>
                                <div className='flex items-center justify-start gap-8 mt-4'>
                                    <div className='flex items-center justify-center gap-3'>
                                        <input type="radio" name="priority" className='w-5 h-5' id="high" />
                                        <label htmlFor="high" className='text-md'>High</label>
                                    </div>
                                    <div className='flex items-center justify-center gap-3'>
                                        <input type="radio" name="priority" className='w-5 h-5' id="normal" />
                                        <label htmlFor="normal" className='text-md'>Normal</label>
                                    </div>
                                </div>
                                <div className='mt-8'>
                                    <label htmlFor="name" className='text-[20px] font-[500]'>Choose name</label>
                                    <select name="name" id="name" className='border-none outline-none p-2 text-lg rounded-md shadow-md w-full bg-white focus-within:ring-2 focus-within:ring-[#2E8BC9] focus-within:outline-none' >
                                        <option value="">Select name</option>
                                        <option value="">Value 2</option>
                                        <option value="">Value 3</option>
                                        <option value="">Value 4</option>
                                    </select>
                                </div>
                                <div className='mt-8'>
                                    <label htmlFor="note" className='text-[20px] font-[500]'>Note</label>
                                    <textarea name="note" id="note" placeholder='Type note' className='border-none outline-none p-2 text-lg rounded-md shadow-md w-full bg-white focus-within:ring-2 focus-within:ring-[#2E8BC9] focus-within:outline-none'></textarea>
                                </div>
                                <div className='mt-8'>
                                    <label htmlFor="due-date" className='text-[20px] font-[500]'>Due date</label>
                                    <input type='date' name="due-date" id="due-date" placeholder='Type note' className='border-none outline-none p-2 text-lg rounded-md shadow-md w-full bg-white focus-within:ring-2 focus-within:ring-[#2E8BC9] focus-within:outline-none' />
                                </div>
                                <div className='mt-8 flex items-center justify-center gap-4'>
                                    <button className='w-full hover:opacity-80 bg-[#2E8BC9] text-white text-center py-2 rounded-md cursor-pointer'>Save</button>
                                    <button onClick={() => setTaskForm(false)} className='w-full hover:opacity-80 text-red-600 border-[1px] border-red-600 text-center py-2 rounded-md cursor-pointer'>Cancel</button>
                                </div>
                            </form>
                        </div> : <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Reminder;
