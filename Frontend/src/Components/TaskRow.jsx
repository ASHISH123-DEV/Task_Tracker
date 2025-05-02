// import React from "react";

// const TaskRow = ({ task, onEdit, onDelete }) => {
//   return (
//     <tr className="border-t hover:bg-gray-50">
//       <td className="py-2 pr-4">{task.title}</td>
//       <td className="py-2 pr-4">{task.description}</td>
//       <td className="py-2 pr-4">
//         <span
//           className={`px-2 py-1 rounded-full text-white text-xs ${
//             task.status === "Completed"
//               ? "bg-green-600"
//               : task.status === "In Progress"
//               ? "bg-yellow-500"
//               : task.status === "Failed"
//               ? "bg-red-500"
//               : "bg-gray-500"
//           }`}
//         >
//           {task.status}
//         </span>
//       </td>
//       <td className="py-2 pr-4 w-40">
//         <div className="w-full bg-gray-200 rounded-full h-4">
//           <div
//             className="bg-green-600 h-4 rounded-full"
//             style={{ width: `${task.progress}%` }}
//           ></div>
//         </div>
//         <span className="text-xs text-gray-600">{task.progress}%</span>
//       </td>
//       <td className="py-2 pr-4">{task.creationDate}</td>
//       <td className="py-2 pr-4">{task.completionDate || "—"}</td>
//       <td className="py-2 flex gap-2">
//         <button
//           onClick={() => onEdit(task)}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded shadow"
//         >
//           Edit
//         </button>
//         <button
//           onClick={() => onDelete(task.id)}
//           className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow"
//         >
//           Delete
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default TaskRow;

import React from "react";

const TaskRow = ({ task, onEdit, onDelete }) => {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="py-2 pr-4 break-words max-w-xs">{task.title}</td>
      <td className="py-2 pr-4 break-words max-w-sm">{task.description}</td>
      <td className="py-2 pr-4">
        <span
          className={`px-2 py-1 rounded-full text-white text-xs whitespace-nowrap ${
            task.status === "Completed"
              ? "bg-green-600"
              : task.status === "In Progress"
              ? "bg-yellow-500"
              : task.status === "Failed"
              ? "bg-red-500"
              : "bg-gray-500"
          }`}
        >
          {task.status}
        </span>
      </td>
      <td className="py-2 pr-4 w-40">
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-600 h-4 rounded-full"
            style={{ width: `${task.progress}%` }}
          ></div>
        </div>
        <span className="text-xs text-gray-600">{task.progress}%</span>
      </td>
      <td className="py-2 pr-4 whitespace-nowrap">{task.creationDate}</td>
      <td className="py-2 pr-4 whitespace-nowrap">
        {task.completionDate || "—"}
      </td>
      <td className="py-2 pr-4 flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => onEdit(task)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded shadow w-full sm:w-auto"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow w-full sm:w-auto"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskRow;
