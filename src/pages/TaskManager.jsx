import React from 'react';
import KanbanColumn from '../components/KanbanColumn';
import FilterDropdown from '../components/FilterDropdown';
import ViewToggle from '../components/ViewToggle';

const mockTasks = {
  todo: [
    {
      id: 1,
      priority: 'High Priority',
      title: 'Submit Pre-Arrival Documents',
      vessel: 'MV Voyager',
      pc: 'PC-12345',
      overdue: '1 day',
      completed: 2,
      total: 7,
      members: ['https://i.pravatar.cc/150?u=a042581f4e29026704d'],
    },
    {
      id: 2,
      priority: 'Medium Priority',
      title: 'Arrange Pilot & Tug Services',
      vessel: 'Sea Serpent',
      pc: 'PC-12348',
      dueDate: 'Tomorrow',
      completed: 0,
      total: 4,
      members: ['https://i.pravatar.cc/150?u=a042581f4e29026704e'],
    },
  ],
  inProgress: [
    {
      id: 3,
      priority: 'Low Priority',
      title: 'Coordinate Bunkering',
      vessel: 'The Neptune',
      pc: 'PC-12346',
      dueDate: 'in 3 days',
      completed: 3,
      total: 5,
      members: [
        'https://i.pravatar.cc/150?u=a042581f4e29026704f',
        'https://i.pravatar.cc/150?u=a042581f4e29026704g',
      ],
    },
  ],
  pendingInfo: [
    {
      id: 4,
      priority: 'Medium Priority',
      title: 'Confirm Berth Availability',
      vessel: 'Ocean Drifter',
      pc: 'PC-12347',
      dueDate: 'in 5 days',
      completed: 1,
      total: 2,
      members: ['https://i.pravatar.cc/150?u=a042581f4e29026704h'],
    },
  ],
  completed: [
    {
        id: 5,
        priority: 'Completed',
        title: 'Finalize Cargo Manifest',
        vessel: 'Cargo King',
        pc: 'PC-12344',
        dueDate: 'Done',
        completed: 6,
        total: 6,
        members: ['https://i.pravatar.cc/150?u=a042581f4e29026704i'],
      },
  ],
};

const TaskManager = () => {
  return (
    <div className="flex-1 p-8 bg-background-light">
      <div className="flex flex-wrap justify-between gap-4 items-center">
        <p className="text-slate-900 text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
          Tasks
        </p>
        <ViewToggle />
      </div>
      <div className="flex gap-3 py-4 overflow-x-auto">
        <FilterDropdown title="Port Call" />
        <FilterDropdown title="Vessel" />
        <FilterDropdown title="Priority" />
        <FilterDropdown title="Status" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
        <KanbanColumn
          title="To Do"
          count={mockTasks.todo.length}
          tasks={mockTasks.todo}
        />
        <KanbanColumn
          title="In Progress"
          count={mockTasks.inProgress.length}
          tasks={mockTasks.inProgress}
        />
        <KanbanColumn
          title="Pending Info"
          count={mockTasks.pendingInfo.length}
          tasks={mockTasks.pendingInfo}
        />
        <KanbanColumn
          title="Completed"
          count={mockTasks.completed.length}
          tasks={mockTasks.completed}
        />
      </div>
    </div>
  );
};

export default TaskManager;
