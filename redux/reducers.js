import { createSlice } from "@reduxjs/toolkit";
export const toDoSlider = createSlice({
  name: "toDo",
  initialState: {
    todoList: [
      { id: 1, content: "User Research & Analysis", completed: true},
      { id: 2, content: "Black & White Wireframe", completed: true},
      { id: 3, content: "Design On Figma", completed: false},
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      let newTodoList = {
        id: Math.random(),
        content: action.payload.newContent,
        completed: false,
      };
      state.todoList.push(newTodoList);
    },
    deleteToDo: (state) => {
      state.todoList = [];
    },
    completeToDo: (state, action) => {
      state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
      });
    }
  },
});
// Action creators are generated for each case reducer function
export const { addToDo, deleteToDo, completeToDo } = toDoSlider.actions;
export default toDoSlider.reducer;
