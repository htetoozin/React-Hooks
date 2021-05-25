import React, { useCallback, useMemo } from 'react';

function foo() {
  return 'bar';
}

const ExampleUseMemo = () => {
  const memoizedCallback = useCallback(foo, []);
  const memoizedResult = useMemo(foo, []);

  return (
    <div>
      <p>Hello Memo</p>
      Callback {memoizedCallback} <br />
      Callback call {memoizedCallback()} <br />
      Memo {memoizedResult}
    </div>
  );
};

export default ExampleUseMemo;
