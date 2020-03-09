import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SAY_HELLO } from './queries';

const App = () => {
  const { data, loading, error } = useQuery(SAY_HELLO);
  console.log(data, 'data');
  console.log(loading, 'loading');
  console.log(error, 'error');

  if (loading) {
    return <div>loadig...</div>;
  }
  return <div>{JSON.stringify(data)}</div>;

  //렌더링이될때 쿼리문이 실행됨
  return <div>App!</div>;
};

export default App;
