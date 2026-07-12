import { useMemo, useState } from "react";
import { ActiveTaskCard } from "../components/ActiveTaskCard";
import { StatusCard } from "../components/StatusCard";
import TaskFilterSection from "../components/TaskFilterSection";
import { statusOptions } from "../constants/taskManager";
import { useSelector } from "react-redux";

export default function Completed() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dueDateSort, setDueDateSort] = useState('normal');

  const tasks = useSelector((state) => state.task);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.task.toLowerCase().includes(searchTerm.toLowerCase()) || task.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || task.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const sortedTasks = useMemo(() => {
    const tasksCopy = [...filteredTasks];
    if (dueDateSort === 'asc') {
      return tasksCopy.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
    }
    if (dueDateSort === 'desc') {
      return tasksCopy.sort((a, b) => b.dueDate.localeCompare(a.dueDate));
    }
    return tasksCopy;
  }, [filteredTasks, dueDateSort]);

  return (
    <div className="py-40 md:px-10 md:py-24">
      <div className="text-2xl font-bold text-gray-800">Completed Tasks</div>
      <div className="text-gray-600">Review your accomplished work history.</div>
      <TaskFilterSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        dueDateSort={dueDateSort}
        setDueDateSort={setDueDateSort}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
        {sortedTasks.filter((task) => task.status === 'completed').length > 0 ? (
          sortedTasks.filter((task) => task.status === 'completed').map((task, index) => (
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
						{tasks.length === 0 ? 'No tasks yet.' : 'No tasks match the selected filters.'}
					</div>
        )}
      </div>
    </div>
  )
}

