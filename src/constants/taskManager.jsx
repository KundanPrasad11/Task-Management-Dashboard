import { LuClock4, LuRefreshCcw, LuCheck } from "react-icons/lu";

export const statusOptions = {
  Pending: {
    icon: <LuClock4 className="text-red-600" />,
    reduxKey: 'pending',
  }, 'In Progress': {
    icon: <LuRefreshCcw className="text-blue-600" />,
    reduxKey: 'in-progress',
  }, 'Completed': {
    icon: <LuCheck className="text-green-600" />,
    reduxKey: 'completed',
  }
};