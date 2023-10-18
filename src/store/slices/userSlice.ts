import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  email: string | null;
  fullName: string | null;
}

const initialState: UserState = { email: null, fullName: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFullName(
      state,
      action: PayloadAction<{ fullName: UserState["fullName"] }>
    ) {
      state.fullName = action.payload.fullName;
    },
    setEmail(state, action: PayloadAction<{ email: UserState["email"] }>) {
      state.email = action.payload.email;
    },
  },
});

export const { setEmail, setFullName } = userSlice.actions;

export default userSlice.reducer;
