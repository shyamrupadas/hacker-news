import axios from 'axios';

export const BASE_URL = 'http://localhost:5000/api/';
export const STORIES_URL = `${BASE_URL}stories/`;

export const getStories = () => (
  axios
    .get(STORIES_URL)
    .then(res => res.data)
);

export const getStory = async (storyId: number) => {
  return await axios
    .get(`${STORIES_URL + storyId}`)
    .then(res => res.data);
};

