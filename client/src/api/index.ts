import axios from 'axios';

export const BASE_URL = 'http://localhost:5000/api/';
export const NEW_STORIES_URL = `${BASE_URL}stories-ids`;
export const STORY_URL = `${BASE_URL}item/`;

export const getStoriesIds = () => (
  axios
    .get(NEW_STORIES_URL)
    .then(res => res.data)
);
