export const validateInputNumber = (e: any) => {
  let checkIfNum = false;

  if (e.key !== undefined) {
    // Check if it's a "e", ".", "+" or "-"
    checkIfNum = e.key === 'e' || e.key === '.' || e.key === '+' || e.key === '-';
  } else if (e.keyCode !== undefined) {
    // Check if it's a "e" (69), "." (190), "+" (187) or "-" (189)
    checkIfNum = e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 187 || e.keyCode === 189;
  }

  return checkIfNum;
};
