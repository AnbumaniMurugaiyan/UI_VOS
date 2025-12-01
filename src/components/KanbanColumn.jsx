import React from 'react';
import TaskCard from './TaskCard';

const KanbanColumn = ({ title, count, tasks }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-2">
        <h3 className="font-bold text-slate-800">{title}</h3>
        <span className="text-sm font-medium text-slate-500 bg-slate-200 rounded-full px-2 py-0.5">
          {count}
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
