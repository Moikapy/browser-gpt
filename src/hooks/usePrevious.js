import {useRef, useEffect} from 'react';

// Given any value
// This hook will return the previous value
// Whenever the current value changes

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
