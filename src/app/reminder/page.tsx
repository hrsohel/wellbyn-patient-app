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
            <div className=" rounded-xl shadow-md p-6 mt-8">
                <div className="flex justify-between items-center mb-4 bg-white p-4 rounded-md">
                    <div>
                        <h2 className="text-xl font-semibold">Reminder</h2>
                        <p className="text-sm text-gray-500">Manage all the task reminder</p>
                    </div>
                    <button onClick={() => setTaskForm(true)} className="bg-[#2E8BC9] hover:opacity-90 text-white px-4 py-2 rounded-md">
                        + Add Task
                    </button>
                </div>

                <div className="md:space-y-4 mt-4 bg-white flex items-start justify-center md:flex-nowrap flex-wrap">
                    <div className='w-full rounded-l-lg relative'>
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className="flex flex-wrap md:flex-nowrap items-center justify-between border-b border-[#e9e9e9] rounded-md p-3 py-6"
                            >
                                <div className="flex items-center gap-2 w-full md:w-1/3">
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleComplete(task.id)}
                                        className="w-5 h-5 appearance-none border-none outline-none ring-1 ring-gray-300 rounded-sm shadow-md checked:bg-blue-500 checked:ring-blue-500 transition-all"
                                    />
                                    <span
                                        className={`text-base ${task.completed ? 'line-through text-gray-400' : 'text-black'
                                            }`}
                                    >
                                        {task.name}
                                    </span>
                                    {task.status === 'new' && (
                                        <span className="bg-blue-100 text-[#2E8BC9] px-2 py-0.5 text-xs rounded-full">
                                            New
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-2 w-full md:w-1/3 justify-center md:justify-start">
                                    {task.status === 'complete' ? (
                                        <span className="text-green-600 text-sm bg-green-100 px-2 py-0.5 rounded-full">
                                            ✓ Complete
                                        </span>
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

                                <div className="flex items-center gap-2 w-full md:w-1/3 justify-end">
                                    <div className="flex items-center">
                                        {[1, 2, 3].map((_, i) => (
                                            <img
                                                key={i}
                                                src={`https://i.pravatar.cc/150?img=${i + 1}`}
                                                alt="Avatar"
                                                className="w-9 h-9 rounded-full -ml-2 border-2 border-white"
                                            />
                                        ))}
                                        <div className="bg-[#2E8BC9] w-9 h-9 text-white text-center text-xs pt-2 rounded-full border-2 -ml-2 border-white">
                                            +5
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-500">{task.date}</span>
                                    <Image src="/Frame 2147226750.svg" alt='update' width="30" height="30" className="text-blue-500 hover:text-blue-700 cursor-pointer " />
                                    <Image src="/delete-02.svg" alt='delete' width="20" height="20" className="text-blue-500 hover:text-blue-700 cursor-pointer " />
                                </div>
                            </div>
                        ))}
                    </div>
                    {
                        showTaskform ? <div className='p-3 md:w-[40%] md:static absolute top-0 left-0 w-full min-h-full bg-slate-100'>
                            <form method="post" className=' w-full'>
                                <div className='w-full'>
                                    <label htmlFor="title" className='text-lg'>Title</label>
                                    <input type="text" name="title" id="title" className='border-none outline-none p-2 text-lg rounded-md shadow-md w-full bg-white' placeholder='Write...' />
                                </div>
                                <p className='text-lg pt-8'>Priority</p>
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
                                    <label htmlFor="name" className='text-lg'>Choose name</label>
                                    <select name="name" id="name" className='border-none outline-none p-2 text-lg rounded-md shadow-md w-full bg-white' >
                                        <option value="">Select name</option>
                                        <option value="">Value 2</option>
                                        <option value="">Value 3</option>
                                        <option value="">Value 4</option>
                                    </select>
                                </div>
                                <div className='mt-8'>
                                    <label htmlFor="note" className='text-lg'>Note</label>
                                    <textarea name="note" id="note" placeholder='Type note' className='border-none outline-none p-2 text-lg rounded-md shadow-md w-full bg-white'></textarea>
                                </div>
                                <div className='mt-8'>
                                    <label htmlFor="due-date" className='text-lg'>Due date</label>
                                    <input type='date' name="due-date" id="due-date" placeholder='Type note' className='border-none outline-none p-2 text-lg rounded-md shadow-md w-full bg-white' />
                                </div>
                                <div className='mt-8 flex items-center justify-center gap-4'>
                                    <button className='w-full bg-[#2E8BC9] text-white text-center py-2 rounded-md cursor-pointer'>Save</button>
                                    <button onClick={() => setTaskForm(false)} className='w-full text-red-600 border-[1px] border-red-600 text-center py-2 rounded-md cursor-pointer'>Cancel</button>
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
