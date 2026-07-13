import React from 'react';

const variantClasses = {
  success: 'border-green-200 bg-green-100 text-green-700',
  danger: 'border-red-200 bg-red-100 text-red-700',
  primary: 'border-blue-200 bg-blue-100 text-blue-700',
};

const Tag = ({ label, variant = 'primary', className = '', children }) => {
  const resolvedLabel = label ?? children ?? 'Tag';

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${variantClasses[variant] || variantClasses.primary} ${className}`.trim()}
    >
      {resolvedLabel}
    </span>
  );
};

export default Tag;
