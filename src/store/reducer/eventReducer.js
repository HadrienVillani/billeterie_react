import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: {
    isLoading: false,
    isErrored: false,
    errorMessage: "",
    data: [],
  },
  event: {
    isPosting: false,
    isErrored: false,
    errorMessage: "",
    data: {
      id: 0,
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      organizer: "",
    },
  },
};
const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEventValue(state, action) {
      //   state.event.data[action.payload.name] = action.payload.value;
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export const { setEventValue } = eventsSlice.actions;

export default eventsSlice.reducer;
