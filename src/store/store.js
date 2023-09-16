import _ from "lodash";
import { nanoid } from "nanoid";
import { create } from "zustand";

export const useTodos = create((set, get) => ({
  todos: [
    {
      _id: nanoid(),
      title: "Пройти курс по TypeScript",
      completed: true,
      created_time: Date.now(),
    },
    {
      _id: nanoid(),
      title: "Сделать адаптивную верстку проекта по макету из Figma",
      completed: false,
      created_time: Date.now(),
    },
    {
      _id: nanoid(),
      title: "Написать unit-тесты",
      completed: false,
      created_time: Date.now(),
    },
  ],
  loading: false,
  fetchTodos() {
    return _.orderBy(get().todos, "created_time", "desc");
  },
  addTodo(payload) {
    //payload - "полезная нагрузка"
    if (payload !== "") {
      const newTodo = {
        _id: nanoid(),
        title: payload,
        completed: false,
        created_time: Date.now(),
      };
      set({ loading: true });
      window.setTimeout(() => {
        set((state) => ({
          ...state,
          loading: false,
          todos: [...state.todos, newTodo],
        }));
      }, 1000);
    }
  },
  removeTodo(id) {
    // set({ todos: get().todos.filter((todo) => todo._id !== id) });
    // ИЛИ
    set((state) => ({
      todos: state.todos.filter((todo) => todo._id !== id),
    }));
  },
  editTodo(id, title) {
    if (title !== "") {
      set((state) => ({
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === id ? { ...todo, title } : todo
        ),
      }));
    }
  },
  completeTodo(id) {
    set((state) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  removeSelected() {
    set({ todos: get().todos.filter((todo) => !todo.completed) });
  },
}));
