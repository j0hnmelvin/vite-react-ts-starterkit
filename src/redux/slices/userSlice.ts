import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/user.types";

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users = [...state.users, action.payload];
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      // return action.payload;
      // By returning action.payload, you're effectively telling Redux Toolkit to replace
      // the entire state.users array with the new array provided in the action's payload.
      // Immer handles the creation of a new state object with the updated users array.
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, setUsers } = userSlice.actions;

export default userSlice.reducer;
