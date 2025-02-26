import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const mappedDirectors = directors.map(director => <div>{director.name}{director.movies}</div>)
  return (
    <div>
      <h1>Directors Page</h1>
      {mappedDirectors}
    </div>
  );
}

export default Directors
