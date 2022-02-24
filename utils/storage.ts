export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('persist:root');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (key: string, value: string) => {
  try {
    const serializedState = typeof value === 'string' ? value : JSON.stringify(value);
    sessionStorage.setItem(key, serializedState);
  } catch (error) {
    // Ignore write errors.
  }
};
