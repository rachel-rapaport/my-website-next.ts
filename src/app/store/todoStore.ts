import { create } from "zustand";

interface Todo {
  id: number;
  name: string;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (name: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (todo: Todo) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (name: string) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), name }],
    })),
  deleteTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  updateTodo: (todo: Todo) =>
    set((state) => ({
      todos: state.todos.map((mytodo) =>
        todo.id === mytodo.id ? { ...todo, name: todo.name } : mytodo
      ),
    })),
}));

export default useTodoStore;
