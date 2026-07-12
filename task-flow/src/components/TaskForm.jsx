import { useActionState, useEffect } from "react";
import { addTask, updateTask } from "../features/task/taskSlice";
import { useDispatch } from "react-redux";

export const TaskForm = ({ onSubmit, initialData = {}, index }) => {
    const dispatch = useDispatch();

    const formAction = (prev, formData) => {
        const task = formData.get('task');
        const description = formData.get('description');
        const status = formData.get('status');
        const dueDate = formData.get('dueDate');
        const createdAt = initialData.createdAt || null;
        const errors = {};

        if (!task || task.trim().length < 3) {
            errors.task = 'Task name must be at least 3 characters long.';
        }
        if (!dueDate) {
            errors.dueDate = 'Due date is required.';
        }

        if (Object.keys(errors).length > 0) {
            return { success: false, errors, values: { task, description, status, dueDate, createdAt } };
        }

        const date = new Date().toISOString();
        if (createdAt) {
            dispatch(updateTask({updatedTask: { task, description, status, dueDate, createdAt, updatedAt: date }, index }));
        } else {
            dispatch(addTask({ task, description, status, dueDate, createdAt: date, updatedAt: date }));
        }

        return { success: true, errors: {}, values: {} };
    };

    const [state, action, isPending] = useActionState(formAction, {
        success: false,
        errors: {},
        values: initialData
    });

    useEffect(() => {
        if (state.success) {
            onSubmit();
        }
    }, [state.success, onSubmit]);

    return (
        <form action={action} noValidate className="flex flex-col gap-4">
            <div>
                <input
                    type="text"
                    name="task"
                    placeholder="Task Title..."
                    autoFocus
                    defaultValue={state.values?.task ?? initialData.task ?? ''}
                    className={`w-full px-3 py-2 focus:outline-none text-gray-600 font-bold text-xl`}
                />
                {state.errors.task && <p className="text-red-500 text-sm">{state.errors.task}</p>}
            </div>
            <div>
                <textarea
                    name="description"
                    placeholder="Add Description..."
                    defaultValue={state.values?.description ?? initialData.description ?? ''}
                    className={`w-full px-3 py-2 focus:outline-none text-gray-600 font-medium text-base border border-gray-300 rounded-md`}
                />
                {state.errors.description && <p className="text-red-500 text-sm">{state.errors.description}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <select
                        name="status"
                        defaultValue={state.values?.status ?? initialData.status ?? 'pending'}
                        className={`w-full px-3 py-2 focus:outline-none text-gray-600 font-medium text-base border border-gray-300 rounded-md`}
                    >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div>
                    <input
                        type="date"
                        name="dueDate"
                        defaultValue={state.values?.dueDate ?? initialData.dueDate ?? ''}
                        className={`w-full px-3 py-2 focus:outline-none text-gray-600 font-medium text-base border border-gray-300 rounded-md`}
                    />
                    {state.errors.dueDate && <p className="text-red-500 text-sm">{state.errors.dueDate}</p>}
                </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
                {/* <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 font-medium text-base border border-gray-300 rounded-md hover:bg-gray-100"
                >
                    Cancel
                </button> */}
                <button
                    type="submit"
                    disabled={isPending}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    {isPending ? 'Saving...' : 'Save Task'}
                </button>
            </div>
        </form>
    )
};