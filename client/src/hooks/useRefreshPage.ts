import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useRefreshPage = (callback: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshPage = setInterval(() => {
      dispatch(callback());
    },60000);
    return () => clearInterval(refreshPage);
  }, [callback, dispatch]);
};
