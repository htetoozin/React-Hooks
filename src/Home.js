import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Home = () => {
  const { value, setValue } = useContext(UserContext);
  return (
    <div>
      <p>Home {value}</p>
    </div>
  );
};

export default Home;
