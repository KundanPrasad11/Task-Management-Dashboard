import React from 'react';
import { useLocation } from 'react-router-dom';
import { FiSearch, FiArrowDown, FiArrowUp, FiArrowRight } from 'react-icons/fi';

const TaskFilterSection = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  dueDateSort,
  setDueDateSort,
}) => {
  const location = useLocation();
  const isCompletedPage = location.pathname === '/completed';

  const nextSort = (current) => {
    if (current === 'normal') return 'asc';
    if (current === 'asc') return 'desc';
    return 'normal';
  };

  const sortIcon = {
    normal: FiArrowRight,
    asc: FiArrowUp,
    desc: FiArrowDown,
  }[dueDateSort];

  const SortIcon = sortIcon || FiArrowRight;

  return (
    <div className="mt-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:max-w-lg">
          <div className="relative">
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[300px] rounded-lg bg-[#e4e7ec] px-10 py-3 text-sm text-gray-700 focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          {!isCompletedPage && (
            <div className="min-w-[120px]">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="all">All statuses</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          )}

          <button
            type="button"
            title={
              dueDateSort === 'normal'
                ? 'Click to sort due date ascending'
                : dueDateSort === 'asc'
                ? 'Click to sort due date descending'
                : 'Click to reset due date sort'
            }
            onClick={() => setDueDateSort(nextSort(dueDateSort))}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-blue-50"
          >
            <SortIcon className="h-4 w-4" />
            Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskFilterSection;
