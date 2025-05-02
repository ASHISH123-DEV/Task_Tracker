// import React from "react";

// const TaskForm = ({
//   form,
//   handleChange,
//   handleSubmit,
//   isEditing,
//   cancelEdit,
// }) => {
//   return (
//     <section className="bg-white rounded-2xl shadow p-6">
//       <h2 className="text-xl font-semibold text-green-700 mb-4">
//         {isEditing ? "Edit Task" : "Create Task"}
//       </h2>
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 md:grid-cols-2 gap-6"
//       >
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Title
//           </label>
//           <input
//             type="text"
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             required
//             className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Description
//           </label>
//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             required
//             className="w-full border px-4 py-2 h-20 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
//           ></textarea>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Status
//           </label>
//           <select
//             name="status"
//             value={form.status}
//             onChange={handleChange}
//             className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
//           >
//             <option>New</option>
//             <option>In Progress</option>
//             <option>Completed</option>
//             <option>Failed</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Progress (%)
//           </label>
//           <input
//             type="number"
//             name="progress"
//             value={form.progress}
//             onChange={handleChange}
//             min={0}
//             max={100}
//             className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Creation Date
//           </label>
//           <input
//             type="date"
//             name="creationDate"
//             value={form.creationDate}
//             onChange={handleChange}
//             required
//             className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Completion Date
//           </label>
//           <input
//             type="date"
//             name="completionDate"
//             value={form.completionDate}
//             onChange={handleChange}
//             className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
//           />
//         </div>
//         <div className="md:col-span-2 flex justify-end gap-4">
//           {isEditing && (
//             <button
//               type="button"
//               onClick={cancelEdit}
//               className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg shadow"
//             >
//               Cancel
//             </button>
//           )}
//           <button
//             type="submit"
//             className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow transition"
//           >
//             {isEditing ? "Update Task" : "Add Task"}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default TaskForm;

import React from "react";

const TaskForm = ({
  form,
  handleChange,
  handleSubmit,
  isEditing,
  cancelEdit,
}) => {
  return (
    <section className="bg-white rounded-2xl shadow p-4 sm:p-6">
      <h2 className="text-xl font-semibold text-green-700 mb-4">
        {isEditing ? "Edit Task" : "Create Task"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 h-20 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option>New</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Failed</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Progress (%)
          </label>
          <input
            type="number"
            name="progress"
            value={form.progress}
            onChange={handleChange}
            min={0}
            max={100}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Creation Date
          </label>
          <input
            type="date"
            name="creationDate"
            value={form.creationDate}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Completion Date
          </label>
          <input
            type="date"
            name="completionDate"
            value={form.completionDate}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="md:col-span-2 flex flex-col sm:flex-row justify-end gap-2 sm:gap-4">
          {isEditing && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg shadow w-full sm:w-auto"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow transition w-full sm:w-auto"
          >
            {isEditing ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default TaskForm;
