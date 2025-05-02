

import React, { useState } from "react";
import Header from "../Components/Header";
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "New",
    creationDate: "",
    completionDate: "",
    progress: 0,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "progress" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editId ? { ...form, id: editId } : task
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      const newTask = {
        ...form,
        id: Date.now(),
      };
      setTasks((prev) => [...prev, newTask]);
    }
    setForm({
      title: "",
      description: "",
      status: "New",
      creationDate: "",
      completionDate: "",
      progress: 0,
    });
  };

  const handleEdit = (task) => {
    setForm(task);
    setEditId(task.id);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditId(null);
    setForm({
      title: "",
      description: "",
      status: "New",
      creationDate: "",
      completionDate: "",
      progress: 0,
    });
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <Header />
        <TaskForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isEditing={isEditing}
          cancelEdit={cancelEdit}
        />
        <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </main>
  );
};

export default TaskDashboard;
