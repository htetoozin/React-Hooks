# useEffect() will let you create side effects on your components based on the dependencies you send to it.

# useCallback() will return a memoized callback. Normally, if you have a child component that receives a function prop, at each re-render of the parent component, this function will be re-executed; by using useCallback() you ensure that this function is only re-executed when any value on it's dependency array changes.

# useMemo() will return a memoized value that is the result of the passed parameter. It means that useMemo() will make the calculation for some parameter once and it will then return the same result for the same parameter from a cache.This is very useful when you need to process a huge amount of data.
