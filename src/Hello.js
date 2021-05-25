import React from 'react';
import useCountRenders from './useCountRenders';

const Hello = React.memo(({ increment }) => {
  //   useCountRenders();
  return (
    <div>
      <button onClick={() => increment(5)}>Hello</button>
    </div>
  );
});

export default Hello;
