import { useEffect, useMemo, useState } from "react";
import { ActiveTaskCard } from "../components/ActiveTaskCard";
import { StatusCard } from "../components/StatusCard";
import TaskFilterSection from "../components/TaskFilterSection";
import { LuClock4, LuRefreshCcw, LuCheck } from "react-icons/lu";
import { statusOptions } from "../constants/taskManager";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../features/task/taskSlice";
import { TaskForm } from "../components/TaskForm";
import { Modal } from "../components/Modal";
import { useNavigate } from "react-router-dom";

export default function Active() {
	const [searchTerm, setSearchTerm] = useState('');
	const [statusFilter, setStatusFilter] = useState('all');
	const [dueDateSort, setDueDateSort] = useState('normal');
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
	const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

	const tasks = useSelector((state) => state.task);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		console.log('Selected Task:', tasks[selectedTaskIndex]);
	}, [selectedTaskIndex]);

	const filteredTasks = useMemo(() => {
		return tasks.filter((task) => {
			const matchesSearch = task.task.toLowerCase().includes(searchTerm.toLowerCase()) || task.description.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesStatus = statusFilter === 'all' || task.status === statusFilter;

			return matchesSearch && matchesStatus;
		});
	}, [searchTerm, statusFilter , tasks]);

	const sortedTasks = useMemo(() => {
		const tasksCopy = [...filteredTasks];
		if (dueDateSort === 'asc') {
			return tasksCopy.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
		}
		if (dueDateSort === 'desc') {
			return tasksCopy.sort((a, b) => b.dueDate.localeCompare(a.dueDate));
		}
		return tasksCopy;
	}, [filteredTasks, dueDateSort, tasks]);

	const handleDelete = (index) => {
		dispatch(deleteTask(index));
	};

	const handleEdit = (index) => {
		setSelectedTaskIndex(index);
		setIsTaskModalOpen(true);
	};

	return (
		<div className="px-10 py-24">
			<div className="text-2xl font-bold text-gray-800">Active Tasks</div>
			<div className="text-gray-600">Manage and track your ongoing work.</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
				{Object.entries(statusOptions).map(([status, { icon, count }]) => (
					<StatusCard key={status} status={status} icon={icon} count={count} />
				))}
			</div>
			<TaskFilterSection
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				statusFilter={statusFilter}
				setStatusFilter={setStatusFilter}
				dueDateSort={dueDateSort}
				setDueDateSort={setDueDateSort}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
				{sortedTasks.length > 0 ? (
					sortedTasks.map((task, index) => (
						<ActiveTaskCard
							key={task.createdAt}
							task={task.task}
							description={task.description}
							status={task.status}
							dueDate={task.dueDate}
							onEdit={() => handleEdit(index)}
							onDelete={() => handleDelete(index)}
						/>
					))
				) : (
					<div className="col-span-full rounded-lg border border-dashed border-gray-300 p-6 text-center text-gray-500">
						No tasks match the selected filters.
					</div>
				)}
			</div>
			<Modal
				isOpen={isTaskModalOpen} 
				onClose={() => setIsTaskModalOpen(false)}
				title="Add Task"
				content= {<TaskForm onSubmit={() => {
					setSelectedTaskIndex(null);
					setIsTaskModalOpen(false);
					navigate('/');
					}} 
					initialData={selectedTaskIndex !== null ? tasks[selectedTaskIndex] : {}}
					index={selectedTaskIndex}
					/>
				}
			/>
		</div>
	)
}
