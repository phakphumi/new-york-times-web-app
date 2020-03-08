import {
  useEffect,
  useState,
} from 'react';

export function useDebounce(value, timeout) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, timeout);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debounceValue;
}
