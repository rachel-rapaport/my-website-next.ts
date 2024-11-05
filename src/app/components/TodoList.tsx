"use client";
import React, { useState } from "react";
import useTodoStore from "../store/todoStore";

const TodoList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState<string>("");
  const todos = useTodoStore((state) => state.todos);
  const addItem = useTodoStore((state) => state.addTodo);
  const deleteItem = useTodoStore((state) => state.deleteTodo);
  const updateItem = useTodoStore((state) => state.updateTodo);

  const handleAddItem = () => {
    if (name) {
      addItem(name);
      setName("");
    }
  };

  const handleEditClick = (todoId: number, currentName: string) => {
    setEditingId(todoId);
    setEditName(currentName);
  };

  const handleUpdateItem = (id: number) => {
    updateItem({ id, name: editName });
    setEditingId(null);
    setEditName("");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700  p-4 ">
        TODO LIST
      </h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
          className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-r-lg hover:bg-blue-600 transition text-lg ml-3"
        >
          Add Item
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">
          No TODO items available
        </p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm"
            >
              {editingId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="flex-1 border border-gray-300 rounded p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    onClick={() => handleUpdateItem(todo.id)}
                    className="bg-green-500 text-white px-3 rounded hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="flex-1 text-gray-800">{todo.name}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditClick(todo.id, todo.name)}
                      className="bg-yellow-500 text-white px-3 rounded hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteItem(todo.id)}
                      className="bg-red-500 text-white px-3 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
