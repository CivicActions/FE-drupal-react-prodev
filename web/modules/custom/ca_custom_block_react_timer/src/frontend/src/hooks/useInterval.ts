import { useEffect, useRef } from 'react';

/**
 * Custom hook adapted from the blog post here:
 *
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 *
 * This hook provides a wrapper around setInterval() to make it
 * more compatible with the coding paradigms used in React.
 *
 * @param callback - The function to be called at regular intervals
 * @param delay - The amount of time between call of the callback function.
 */
export function useInterval(callback: () => void, delay: number | null) {

  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      if (typeof savedCallback.current !== 'undefined') {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
