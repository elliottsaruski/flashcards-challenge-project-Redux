import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {
      /* will hold all topics keyed by #id */
    },
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: [],
      };
    },
    extraReducers: {
      addQuizId: (state, action) => {
        const { quizId, topicId } = action.payload;
        state.topics[topicId].quizIds.push(quizId);
      },
    },
  },
});

export const { addTopic, addQuizId } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;
