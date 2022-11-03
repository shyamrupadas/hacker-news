import axios from 'axios';

export const BASE_URL = 'http://localhost:5000/api/';
export const STORIES_URL = `${BASE_URL}stories/`;
export const COMMENTS_URL = `${BASE_URL}comments/`;

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

export const getComment = async (commentId: number) => {
  return await axios
    .get(`${COMMENTS_URL + commentId}`)
    .then(({data}) => data);
};
