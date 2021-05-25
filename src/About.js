import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const About = () => {
  const { value, setValue } = useContext(UserContext);
  return (
    <div>
      <p>About Us {value}</p>
      <button onClick={() => setValue('Hey')}>Change Value</button>
    </div>
  );
};

export default About;
