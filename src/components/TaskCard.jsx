import React from 'react';

const TaskCard = ({ task }) => {
  const { priority, title, vessel, pc, overdue, dueDate, completed, total, members } = task;

  const priorityStyles = {
    'High Priority': 'text-red-600 bg-red-100',
    'Medium Priority': 'text-orange-600 bg-orange-100',
    'Low Priority': 'text-blue-600 bg-blue-100',
    'Completed': 'text-green-600 bg-green-100',
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md cursor-pointer transition-shadow">
      <span
        className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${
          priorityStyles[priority]
        }`}
      >
        {priority}
      </span>
      <h4 className={`font-bold mt-3 text-slate-900 ${priority === 'Completed' ? 'line-through' : ''}`}>{title}</h4>
      <p className="text-sm text-slate-500 mt-1">
        Vessel: {vessel} / {pc}
      </p>
      <div className="flex items-center justify-between mt-4">
        <div
          className={`flex items-center gap-2 text-sm ${
            overdue ? 'text-red-500' : 'text-slate-600'
          }`}
        >
          <span className="material-symbols-outlined size-20">
            {overdue ? 'error' : 'calendar_today'}
          </span>
          <span>{overdue ? `Overdue: ${overdue}` : `Due: ${dueDate}`}</span>
        </div>
        <div className="flex -space-x-2">
          {members.map((member, index) => (
            <img
              key={index}
              className="inline-block size-7 rounded-full ring-2 ring-white"
              src={member}
              alt={`User avatar ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 text-slate-500 mt-3 text-sm">
        <span className="material-symbols-outlined size-20">
          {completed === total ? 'check_box' : 'check_box_outline_blank'}
        </span>
        <span>
          {completed}/{total} Completed
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
