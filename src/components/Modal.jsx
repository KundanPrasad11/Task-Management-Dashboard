export const Modal = ({ title, isOpen, onClose, content, footer }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center p-4 z-1000" onClick={onClose}>
			<div className="bg-white rounded-lg shadow-lg max-w-md w-full shadow-lg" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center py-2 px-3">
                    <div className="text-lg font-semibold text-gray-700">{title}</div>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer">
                        &times;
                    </button>
                </div>
				<div className="p-4">
					{content}
				</div>
                {footer && (
                    <div className="border-t border-gray-200 p-4">
                        {footer}
                    </div>
                )}
			</div>
		</div>
	);
};