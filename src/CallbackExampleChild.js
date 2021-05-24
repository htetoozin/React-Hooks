import React, { useState, useEffect } from 'react';

const CallbackExampleChild = ({ callbackFunction }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('child');
    setValue(value + 1);
  }, [callbackFunction]);
  return (
    <div>
      {console.log('child render')}
      <p>Child: {value}</p>
    </div>
  );
};

export default CallbackExampleChild;
