import React, { useState } from 'react';

const ViewToggle = () => {
  const [activeView, setActiveView] = useState('Kanban');

  return (
    <div className="flex h-10 items-center justify-center rounded-lg bg-slate-200 p-1">
      <label
        className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 text-sm font-medium leading-normal ${
          activeView === 'Kanban'
            ? 'bg-white shadow-sm text-primary'
            : 'text-slate-600'
        }`}
      >
        <span className="truncate">Kanban</span>
        <input
          checked={activeView === 'Kanban'}
          onChange={() => setActiveView('Kanban')}
          className="invisible w-0"
          name="view-toggle"
          type="radio"
          value="Kanban"
        />
      </label>
      <label
        className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 text-sm font-medium leading-normal ${
          activeView === 'Calendar'
            ? 'bg-white shadow-sm text-primary'
            : 'text-slate-600'
        }`}
      >
        <span className="truncate">Calendar</span>
        <input
          checked={activeView === 'Calendar'}
          onChange={() => setActiveView('Calendar')}
          className="invisible w-0"
          name="view-toggle"
          type="radio"
          value="Calendar"
        />
      </label>
    </div>
  );
};

export default ViewToggle;
