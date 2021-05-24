import React, { useState, useCallback } from 'react';
import CallbackExampleChild from './CallbackExampleChild';

const CallbackExampleParent = () => {
  const [count, setCount] = useState(0);
  const [another, setAnother] = useState(0);

  const countCallback = useCallback(() => {
    console.log('callback count');
    return count;
  }, [count]);

  return (
    <div>
      <CallbackExampleChild callbackFunction={countCallback} />
      <button onClick={() => setCount(count + 1)}>
        Change callback {count}
      </button>

      <button onClick={() => setAnother(another + 1)}>
        Do not change callback {another}
      </button>
    </div>
  );
};

export default CallbackExampleParent;
