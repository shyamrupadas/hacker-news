import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoryState, StoryType } from '../types/types';
import { getStories } from '../api';

const initialState: StoryState = {
  stories: [],
  story: {
    by: '',
    descendants: undefined,
    id: undefined,
    kids: [],
    score: undefined,
    time: undefined,
    title: '',
    type: '',
    url: ''
  },
  loading: false,
  error: null
};

export const fetchStories = createAsyncThunk(
  'story/fetchStories',
  async (_, { rejectWithValue }) => {
    try {
      return await getStories();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    fetchingStories: (state) => {
      state.loading = true;
    },
    fetchStoriesSuccess: (state, action: PayloadAction<StoryType[]>) => {
      state.loading = true;
      state.stories = action.payload;
    },
    fetchStoriesError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchStorySuccess: (state, action: PayloadAction<StoryType>) => {
      state.loading = false;
      state.story = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchStories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      state.loading = false;
      state.stories = action.payload;
    });
    builder.addCase(fetchStories.rejected, (state, action) => {
      state.loading = false;
      // @ts-ignore
      state.error = action.payload;
    });
  },
});

export const { fetchingStories, fetchStoriesSuccess, fetchStoriesError, fetchStorySuccess } = storySlice.actions;
export default storySlice.reducer;
