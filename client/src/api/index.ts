import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';
const HOST = isProduction ? '/' : 'http://localhost:5000/';
const BASE_URL = `${HOST}api/`;
const STORIES_URL = `${BASE_URL}stories/`;
const COMMENTS_URL = `${BASE_URL}comments/`;

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
