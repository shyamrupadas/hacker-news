import React from 'react';
import { NavLink } from 'react-router-dom';
import { StoryType } from '../../types/types';
import { Divider } from '../Divider';
import { Button } from '../Button';

type MenuProps = {
  story: StoryType
}

export const Menu: React.FC<MenuProps> = ({ story }) => {
  return (
    <>
      <NavLink to='/'>
        Back to news list
      </NavLink>
      <Divider />
      <a href={story.url} target={'_blank'}>
        Read the original
      </a>
      <Divider />
      <Button>Update</Button>
    </>
  );
};
