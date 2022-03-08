export const validateInputNumber = (e: any) => {
  const keyNumber = Number(e.key);
  if (isNaN(keyNumber) || e.key === null || e.key === ' ') {
    return (
      e.key === 'e' || e.key === '.' || e.key === '+' || e.key === '-' || e.key === 'Backspace' || e.key === 'Delete'
    );
  } else {
    return true;
  }
};
