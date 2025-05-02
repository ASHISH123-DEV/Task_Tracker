// import React from "react";
// import TaskRow from "./TaskRow";

// const TaskList = ({ tasks, onEdit, onDelete }) => {
//   return (
//     <section className="bg-white rounded-2xl shadow p-6">
//       <h2 className="text-xl font-semibold text-green-700 mb-4">Tasks</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto text-sm text-left">
//           <thead className="text-gray-700 border-b">
//             <tr>
//               <th className="pb-3 pr-4">Title</th>
//               <th className="pb-3 pr-4">Description</th>
//               <th className="pb-3 pr-4">Status</th>
//               <th className="pb-3 pr-4">Progress</th>
//               <th className="pb-3 pr-4">Created</th>
//               <th className="pb-3 pr-4">Completion</th>
//               <th className="pb-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-600">
//             {tasks.map((task) => (
//               <TaskRow
//                 key={task.id}
//                 task={task}
//                 onEdit={onEdit}
//                 onDelete={onDelete}
//               />
//             ))}
//             {tasks.length === 0 && (
//               <tr>
//                 <td colSpan="7" className="text-center py-4 text-gray-400">
//                   No tasks created yet.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default TaskList;

import React from "react";
import TaskRow from "./TaskRow";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <section className="bg-white rounded-2xl shadow p-4 sm:p-6">
      <h2 className="text-xl font-semibold text-green-700 mb-4">Tasks</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="text-gray-700 border-b">
            <tr>
              <th className="pb-3 pr-4">Title</th>
              <th className="pb-3 pr-4">Description</th>
              <th className="pb-3 pr-4">Status</th>
              <th className="pb-3 pr-4">Progress</th>
              <th className="pb-3 pr-4">Created</th>
              <th className="pb-3 pr-4">Completion</th>
              <th className="pb-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {tasks.map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
            {tasks.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-400">
                  No tasks created yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TaskList;
