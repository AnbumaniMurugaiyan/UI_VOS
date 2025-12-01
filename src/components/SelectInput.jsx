import React from 'react';

const SelectInput = ({ label, id, options }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-700" htmlFor={id}>
        {label}
      </label>
      <select
        className="form-select w-full rounded-lg border-slate-200 bg-white focus:border-primary/50 focus:ring-primary/50"
        id={id}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
