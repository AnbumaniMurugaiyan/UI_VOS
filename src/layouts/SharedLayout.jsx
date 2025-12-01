import React from 'react';
import { NavLink } from 'react-router-dom';

const SharedLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      <aside className="flex w-64 flex-col border-r border-slate-200 bg-white p-4">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbIoatrLbZ41NF5VEKh5cHB7pnCee4uVlDqL_jLxg4TzyiJnEmgJxiths_RJzN94F_xlbJjxp5PToHniw4qOVkZYHsxHGn3KisN_-uiFw6Y5OwMyYucHiWlZi_FMF_DLeNNG8cFDVcjq-TYqba2daZGOi9Y2_bPbL1Gx9PSfokBqhoyh1ossAmfyee-eFhZ4OZfOyepqS_N-C1wLrvf_GJOiN0oN1kThvnKv_Ac3xqNAjJNqAWCsApwQwT2dBUbVQcrVL8PfNZDaJC")',
                }}
              ></div>
              <div className="flex flex-col">
                <h1 className="text-base font-bold leading-normal text-slate-900">
                  PortPro
                </h1>
                <p className="text-sm font-normal leading-normal text-slate-500">
                  Maritime Operations
                </p>
              </div>
            </div>
            <nav className="flex flex-col gap-2 mt-4">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`
                }
              >
                <span className="material-symbols-outlined">dashboard</span>
                <p className="text-sm font-medium leading-normal">Dashboard</p>
              </NavLink>
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`
                }
              >
                <span className="material-symbols-outlined">task_alt</span>
                <p className="text-sm font-medium leading-normal">Tasks</p>
              </NavLink>
              <NavLink
                to="/onboarding"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`
                }
              >
                <span className="material-symbols-outlined">add_circle</span>
                <p className="text-sm font-medium leading-normal">New Port Call</p>
              </NavLink>
            </nav>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto bg-background-light">{children}</main>
    </div>
  );
};

export default SharedLayout;
