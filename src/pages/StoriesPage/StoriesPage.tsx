import React from 'react';
import { NavLink } from 'react-router-dom';

const stubStories = [
  {
    id: 1,
    header: 'number1',
    text: 'hello from 1'
  },
  {
    id: 2,
    header: 'number2',
    text: 'hello from 2'
  },
  {
    id: 3,
    header: 'number3',
    text: 'hello from 3'
  },
]

export const StoriesPage = () => {
  return (
    <div>
      {stubStories.map(({id, header, text}) => (
        <div key={id}>
          Header: {header}<br />
          Text: {text}<br />
          <NavLink to={`story/${id}`}>Link</NavLink>
        </div>
      ))}
    </div>
  );
};
