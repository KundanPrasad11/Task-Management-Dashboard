import { LuClock4, LuRefreshCcw, LuCheck } from "react-icons/lu";

export const statusOptions = {
  Pending: {
    icon: <LuClock4 className="text-red-600" />,
    count: 5
  }, 'In Progress': {
    icon: <LuRefreshCcw className="text-blue-600" />,
    count: 2
  }, 'Completed': {
    icon: <LuCheck className="text-green-600" />,
    count: 3
  }
};

export const tasks = [
  { task: 'Design Homepage', description: 'Create a modern and responsive homepage design.', status: 'in-progress', dueDate: '2023-10-15', createdAt: '2023-10-15T09:00:00' },
  { task: 'Implement Authentication', description: 'Set up user authentication with JWT.', status: 'pending', dueDate: '2023-10-20', createdAt: '2023-10-16T09:30:00' },
  { task: 'Write Documentation', description: 'Create comprehensive documentation for the API.', status: 'completed', dueDate: '2023-10-10', createdAt: '2023-10-17T08:30:00' },
  { task: 'Optimize Database', description: 'Improve database queries for better performance.', status: 'in-progress', dueDate: '2023-10-18', createdAt: '2023-10-18T01:00:00' },
  { task: 'Set Up CI/CD', description: 'Implement continuous integration and deployment pipelines.', status: 'pending', dueDate: '2023-10-22', createdAt: '2023-10-19T07:00:00' },
];