import { useState } from "react";
import {Modal} from "../Modal.jsx";
import { TaskForm } from "../TaskForm.jsx";
import { useNavigate, NavLink } from "react-router-dom";

export const Navbar = () => {
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <nav className="bg-[#FFFFFF] px-4 py-3 md:px-16 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/reminders.png" alt="Logo" className="h-8 w-8"/>
                        <span className="text-lg font-bold text-gray-700">TaskFlow</span>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `transition-colors py-1 ${isActive ? "text-blue-500 font-bold" : "text-gray-500 hover:text-blue-500 font-semibold"}`}
                    >
                        All tasks
                    </NavLink>

                    <NavLink
                        to="/completed"
                        className={({ isActive }) => `transition-colors py-1 ${isActive ? "text-blue-500 font-bold" : "text-gray-500 hover:text-blue-500 font-semibold"}`}
                    >
                        Completed tasks
                    </NavLink>
                    <button className="bg-[#3c4157] text-white px-4 py-2 rounded-lg hover:bg-[#2a2e42] transition-colors" onClick={() => setIsTaskModalOpen(true)}>
                        + Add Task
                    </button>
                </div>
            </div>
            <Modal
                isOpen={isTaskModalOpen} 
                onClose={() => setIsTaskModalOpen(false)}
                title="Add Task"
                content= {<TaskForm onSubmit={() => {
                    setIsTaskModalOpen(false);
                    navigate('/');
                    }} />
                }
            />
        </nav>
    );
}