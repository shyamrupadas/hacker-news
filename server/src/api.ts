import axios from 'axios';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
const STORIES_URL = `${BASE_URL}newstories.json`;
const ITEM_URL = `${BASE_URL}item/`;

export const getStories = () => axios.get(STORIES_URL).then((res) => res.data);

export const getItem = (itemId: string) =>
  axios.get(`${ITEM_URL}${itemId}.json`).then((res) => res.data);
