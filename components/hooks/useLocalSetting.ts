import React from 'react';
import mitt from 'mitt';

type LocalCache = Map<string, string>;

const localCache: LocalCache = new Map();
const emitter = mitt();

export function useLocalSetting<T>(
  name: string,
  defaultValue: T,
  defer = true
) {
  const storageKey = name;

  // Initialize state with `null` to defer rendering until hydration
  const [value, _setValue] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadFromStorage = () => {
      const json = localCache.get(storageKey) || window.localStorage.getItem(storageKey);
      if (json) {
        try {
          const parsedValue = JSON.parse(json);
          _setValue(parsedValue);
        } catch {
          console.error('Failed to parse localStorage value');
        }
      } else {
        _setValue(defaultValue); // Use default if no value is found
      }
      setLoading(false); // Mark as loaded
    };

    // Load data on mount
    loadFromStorage();

    // Listen for changes to localStorage
    window.addEventListener('storage', loadFromStorage);

    return () => {
      window.removeEventListener('storage', loadFromStorage);
    };
  }, [storageKey, defaultValue]);

  // Render a fallback or loading indicator until hydration is complete
  if (loading || value === null) {
    return {
      value: defaultValue,
      setValue: (newValue: T) => {}, // Provide a no-op setter for SSR safety
    };
  }

  // Function to update both localStorage and state
  const setValue = (newValue: T) => {
    try {
      const json = JSON.stringify(newValue);
      localCache.set(storageKey, json);
      window.localStorage.setItem(storageKey, json);
      _setValue(newValue);
      emitter.emit(storageKey, newValue);
    } catch {
      console.error('Failed to set localStorage value');
    }
  };

  return { value, setValue };
}
