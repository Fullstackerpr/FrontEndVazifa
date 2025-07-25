import React from 'react';

const Input = ({ label, name, type = "text", placeholder, options = [] }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium mb-1">
          {label}
        </label>
      )}

      {type === "select" ? (
        <select
          name={name}
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          defaultValue=""
        >
          <option value="" disabled>
            {placeholder || 'Please select'}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <div className="relative">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {type === "password" && (
            <span className="absolute right-3 top-2.5 text-gray-400">👁️</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
