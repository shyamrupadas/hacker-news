import axios from 'axios';

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
export const NEW_STORIES_URL = `${BASE_URL}newstories.json`;
export const STORY_URL = `${BASE_URL}item/`;

export const getStoriesIds = () => (
  axios
    .get(NEW_STORIES_URL)
    .then(res => res.data)
);
