import React from 'react';

const FilterDropdown = ({ title }) => {
  return (
    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white pl-4 pr-2 border border-slate-200 hover:border-slate-300">
      <p className="text-slate-800 text-sm font-medium leading-normal">{title}</p>
      <span className="material-symbols-outlined size-20 text-slate-500">arrow_drop_down</span>
    </button>
  );
};

export default FilterDropdown;
