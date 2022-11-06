export type StoryState = {
  stories: StoryType[];
  loading: boolean;
  error: null | string;
};

export type StoryType = {
  by?: string;
  descendants?: number;
  id?: number;
  kids?: Array<number>;
  score?: number;
  time?: number;
  title?: string;
  type?: string;
  url?: string;
};

export type CommentType = {
  by?: string;
  id?: number;
  kids?: Array<number>;
  parent?: number;
  text?: string;
  time?: number;
  type?: string;
  deleted?: boolean;
};
