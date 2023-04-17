import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList:[],
};

 const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            state.todoList.push(action.payload)
        },
        deleteTodos:(state,action) => {
            state.todoList = state.todoList.filter((item)=> item._id !==action.payload)
        }
    }
})

export const { addTodo,deleteTodos } = todoSlice.actions;
export default todoSlice.reducer;