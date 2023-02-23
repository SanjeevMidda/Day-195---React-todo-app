import { createSlice } from "@reduxjs/toolkit";
import notes from "../data/notes";

// setting up our state slices
export const noteSlice = createSlice({
    name: "notes",

    // 'notes' below holds the initial state imported from our 'notes.js' file in the data folder
    initialState: {value: notes},

    // actions to add, delete and edit a note created below
    reducers: {

        // getting the value the user has added and adding it to our list of notes
        addNote: (state, action) => {
            state.value.push(action.payload);
        },

        // checking the value of a note's id and checking which note to delete from our note's list
        deleteNote: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload.id);
        },

        // checking through all of our notes and updating the correct note with the new input
        updateNote: (state, action) => {
            state.value.map((item) => {
                if(item.id === action.payload.id){
                    item.content = action.payload.content;
                }
            });
        },

        // marking a todo as completed. We first check the id of the todo item, and then change it's completed status to true
        updateCompleted: (state, action) => {
            state.value.map((item) => {
                if(item.id === action.payload.id){
                    item.completed = action.payload.completed;
                }
            });
        },
    }
    });

// exporting for use elsewhere in our code
export const {addNote, deleteNote, updateNote, updateCompleted} = noteSlice.actions;
export default noteSlice.reducer;